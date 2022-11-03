# Configure the AWS Provider
provider "aws" {
  region = "ap-southeast-2"

  access_key = var.aws_access_key_id
  secret_key = var.aws_secret_key
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
    organization = "moretonblue-demo"

    workspaces {
      name = "gh-actions-demo"
    }
  }
}
