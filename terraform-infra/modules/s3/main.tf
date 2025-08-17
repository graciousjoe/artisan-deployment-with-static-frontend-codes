resource "aws_s3_bucket" "frontend" {
  bucket = "var.bucket_name"
 
  tags = {
    Name        = "var.name"
    Environment = "var.environment"
  }

  lifecycle {
    create_before_destroy = true
  }
} 

resource "aws_s3_bucket_versioning" "versioning_frontend" {
  bucket = aws_s3_bucket.frontend.id
  versioning_configuration {
    status = "var.bucket_versioning_status"
  }
}

resource "aws_s3_bucket_public_access_block" "frontend_public_access" {
  bucket                  = aws_s3_bucket.frontend.id
  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}


resource "aws_s3_bucket_policy" "cloudfront_access" {
  bucket = aws_s3_bucket.frontend.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid       = "AllowCloudFrontServicePrincipalReadOnly"
        Effect    = "Allow"
        Principal = {
          Service = "cloudfront.amazonaws.com"
        }
        Action   = [
           "s3:GetObject",
           "s3:GetObjectVersion"
           ]
        Resource = "${var.aws_s3_bucket.frontend.arn}/*"
        Condition = {
          StringEquals = {
            "AWS:SourceArn" = module.cloudfront.cloudfront_arn
          }
        }
      }
    ]
  })
}
