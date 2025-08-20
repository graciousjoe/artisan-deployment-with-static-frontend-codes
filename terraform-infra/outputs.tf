output "bucket_name" {
  description = "The name of the S3 static bucket"
  value       = module.s3.bucket_name
}

output "frontend_bucket_arn" {
  description = "The ARN of the S3 static bucket"
  value       = module.s3.frontend_bucket_arn
}

output "cloudfront_distribution_domain" {
  description = "CloudFront distribution domain name"
  value       = module.cloudfront.cloudfront_domain_name
}

output "oac_id" {
  description = "CloudFront OAC ID"
  value       = module.cloudfront.oac_id
}
