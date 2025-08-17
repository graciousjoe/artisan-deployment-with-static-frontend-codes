resource "aws_cloudfront_origin_access_control" "cloudfront" {
  name                              = "cloud_front"
  description                       = "Cloud Front S3 OAC"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"

}

resource "aws_cloudfront_distribution" "artisanlinkup_frontend" {

  origin {
    domain_name              = var.bucket_regional_domain_name
    origin_access_control_id = aws_cloudfront_origin_access_control.cloudfront.id
    origin_id                = "frontend_origin"
  }

  enabled = true

  viewer_certificate {
    cloudfront_default_certificate = true
  }
  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "frontend_origin"

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }
    viewer_protocol_policy = "redirect_to_https"
  }
  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }
}
