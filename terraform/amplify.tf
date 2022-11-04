resource "aws_amplify_app" "aws-trbrp" {
  name       = "aws-trbrp"
  repository = "https://github.com/nljms/aws-trbrp"

  # The default build_spec added by the Amplify Console for React.
  build_spec = <<-EOT
    version: 1
    applications:
      - appRoot: apps/web
        frontend:
          phases:
            preBuild:
              commands:
                - yarn install
            build:
              commands:
                - yarn run build
          artifacts:
            baseDirectory: out
            files:
              - '**/*'
          cache:
            paths:
              - node_modules/**/*
  EOT

  # The default rewrites and redirects added by the Amplify Console.
  custom_rule {
    source = "/<*>"
    status = "404"
    target = "/index.html"
  }

  environment_variables = {
    ENV = "dev"
  }

  access_token = var.github_token
}

resource "aws_amplify_backend_environment" "backend_service" {
  app_id = aws_amplify_app.aws-trbrp.id
  environment_name = var.environment

  depends_on = [
    aws_amplify_app.aws-trbrp,
    aws_amplify_branch.main
  ]
}

resource "aws_amplify_branch" "main" {
  app_id      = aws_amplify_app.aws-trbrp.id
  branch_name = "main"

  stage     = "PRODUCTION"

  environment_variables = {
    REACT_APP_API_SERVER = "https://api.example.com"
  }
}
