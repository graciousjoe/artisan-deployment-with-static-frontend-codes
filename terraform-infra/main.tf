module "s3" {
  source      = "./modules/s3"
  bucket_name = "artisan_linkup_frontend"
  bucket_versioning_status = true
}

module "cloudfront" {
  source = "./modules/cloudfront"
  frontend_bucket_arn = module.s3.frontend_bucket_arn
  bucket_regional_domain_name = module.s3.frontend_bucket_regional_domain_name
}


