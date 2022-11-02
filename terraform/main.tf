# Configure the AWS Provider
provider "aws" {
  region = "ap-southeast-2"
}

terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
    }
    random = {
      source = "hashicorp/random"
    }
  }

  cloud {
    organization = var.organization_name

    workspaces {
      name = "gh-actions-demo"
    }
  }
}
