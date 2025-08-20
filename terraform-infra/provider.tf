terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 6.0"
    }
  }
}

# Configure the AWS Provider
provider "aws" {
  region = "eu-north-1"
}

# Terraform State files mgt  
terraform {
  backend "s3" {
    bucket = "artisan-frontend-terraform-state"
    key    = "frontend/dev/terraform.tfstate"
    region = "eu-north-1"
  }
}
