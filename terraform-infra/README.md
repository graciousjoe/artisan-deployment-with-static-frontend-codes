## Terraform Infrastructure – Artisan Linkup Frontend
This repository contains the Terraform infrastructure setup for frontend hosting of the Artisan Linkup project using AWS S3 and CloudFront.

## Folder Structure
terraform-infra/
│
├── .github-workflows-deploy.yaml      # GitHub Actions workflow for automated deployment
├── main.tf                            # Root Terraform configuration
├── provider.tf                        # Terraform provider configuration (AWS)
├── variables.tf                       # Root variables definition
├── README.md                           # This file
│
└── modules/                           # Reusable Terraform modules
    ├── cloudfront/                    # CloudFront module
    │   ├── main.tf
    │   ├── outputs.tf
    │   └── variables.tf
    │
    └── s3/                             # S3 module (frontend bucket only)
        ├── main.tf
        ├── outputs.tf
        └── variables.tf

## Modules
S3 Module
Creates the frontend S3 bucket for hosting the application.
Configures:
Versioning
Public access block
Bucket policy


CloudFront Module
Creates a CloudFront distribution for the frontend S3 bucket.
Uses Origin Access Control (OAC) to securely serve S3 content via CloudFront.
Configures:
Default cache behavior
Viewer certificate (default CloudFront certificate)
