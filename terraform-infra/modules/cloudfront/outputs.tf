output "bucket_regional_domain_name" {
    description = "value"
    value = ""
}

output "cloudfront_arn" {
  description = "ARN of the CloudFront distribution"
  value       = aws_cloudfront_distribution.artisanlinkup_frontend.arn
}

output "bucket_arn" {
   value = aws_s3_bucket.frontend.arn
}