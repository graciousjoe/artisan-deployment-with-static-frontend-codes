
# =================================================================
# Bucket policy attached to Cloudfront...
# =================================================================

resource "aws_s3_bucket_policy" "static_frontend_policy" {
  bucket = module.s3.bucket_name

  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Sid       = "AllowCloudFrontReadAccess",
        Effect    = "Allow",
        Principal = {
          Service = "cloudfront.amazonaws.com"
        },
        Action    = "s3:GetObject",
        Resource  = "${module.s3.frontend_bucket_arn}/*",
        Condition = {
          StringEquals = {
            "AWS:SourceArn" = module.cloudfront.cloudfront_distribution_arn
          }
        }
      }
    ]
  })
}

# =================================================================
# S3 for Frontend Static Website.
# =================================================================

module "s3" {
  source           = "./modules/s3"
  project_prefix = var.project_prefix
  bucket_name      = var.bucket_name
  environment       = var.environment
}



# =================================================================
# CloudFront...
# =================================================================

module "cloudfront" {
  source        = "./modules/cloudfront"
  bucket_name   = module.s3.bucket_name
  frontend_bucket_arn    = module.s3.frontend_bucket_arn
  frontend_bucket_website_endpoint = module.s3.frontend_bucket_website_endpoint
  project_prefix = var.project_prefix
}

