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
  region = "var.aws_region"
}

terraform {
  backend "s3" {
    bucket = "artisan-frontend-terraform-state"
    region = "var.aws_region"
  }
}