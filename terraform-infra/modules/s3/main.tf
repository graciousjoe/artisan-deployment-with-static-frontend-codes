resource "random_string" "bucket_suffix" {
  length  = 6
  upper   = false
  special = false
}

resource "aws_s3_bucket" "frontend" {
  bucket = "${var.project_prefix}-${var.bucket_name}"
  force_destroy = true

  tags = {
    Name = "${var.project_prefix}-static-frontend"
    environment  = var.environment
  }
}


resource "aws_s3_bucket_versioning" "versioning" {
  bucket = aws_s3_bucket.frontend.id

  versioning_configuration {
    status = "Enabled"
  }
}


resource "aws_s3_bucket_server_side_encryption_configuration" "encryption" {
  bucket = aws_s3_bucket.frontend.id

  rule {
    apply_server_side_encryption_by_default {
      sse_algorithm = "AES256"
    }
  }
}

resource "aws_s3_bucket_public_access_block" "public_access" {
  bucket = aws_s3_bucket.frontend.id

  block_public_acls       = true
  block_public_policy     = false
  ignore_public_acls      = true
  restrict_public_buckets = true
}

resource "aws_s3_bucket_website_configuration" "config" {
  bucket = aws_s3_bucket.frontend.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "error.html"
  }
}

resource "aws_s3_object" "frontend_files" {
  for_each = fileset(var.frontend_build_path, "**/*")

  bucket = aws_s3_bucket.frontend.id
  key = each.value
  source = "${var.frontend_build_path}/${each.value}"
  etag = filemd5("${var.frontend_build_path}/${each.value}")
}

# resource "aws_s3_bucket_policy" "cloudfront_access" {
#   bucket = aws_s3_bucket.frontend.id

#   policy = jsonencode({
#     Version = "2012-10-17",
#     Statement = [
#       {
#         Sid       = "AllowCloudFrontReadAccess",
#         Effect    = "Allow",
#         Principal = {
#           Service = "cloudfront.amazonaws.com"
#         },
#         Action    = "s3:GetObject",
#         Resource  = "${aws_s3_bucket.frontend.arn}/*",
#         Condition = {
#           StringEquals = {
#             "AWS:SourceArn" = aws_cloudfront_distribution.cdn.arn
#           }
#         }
#       }
#     ]
#   })
# }
