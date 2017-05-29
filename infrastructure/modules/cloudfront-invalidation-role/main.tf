resource "aws_iam_policy" "distribution_invalidation_policy" {
  policy = <<EOF
{
    "Version": "2012-10-17",
    "Statement":
    [
        {
            "Effect": "Allow",
            "Action": [
                "cloudfront:CreateInvalidation"
            ],
            "Resource": [
                "${var.distribution_arn}"
            ]
        }
    ]
}
EOF
}
