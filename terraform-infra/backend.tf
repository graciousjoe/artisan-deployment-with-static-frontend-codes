# Terraform State files mgt  
terraform {
  backend "s3" {
    bucket = "artisan-frontend-terraform-state"
    key    = "frontend/dev/terraform.tfstate"
    region = "us-east-1"
  }
}
