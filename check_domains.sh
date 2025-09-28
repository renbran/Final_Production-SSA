#!/bin/bash
# Check Custom Domain Status

CLOUDFLARE_API_TOKEN="qYarMfEkOP_5s2dbaPC2MJCSJgfJ_EEoqtrVGJur"
ACCOUNT_ID="5ca87478e09d6ebc6954f770ac4656e8"
PROJECT_NAME="scholarix-study-abroad"

echo "Checking all custom domains for project $PROJECT_NAME..."

# Get all custom domains
curl -X GET "https://api.cloudflare.com/client/v4/accounts/$ACCOUNT_ID/pages/projects/$PROJECT_NAME/domains" \
     -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN" \
     -H "Content-Type: application/json" | jq '.'

echo ""
echo "Setting up CNAME records to ensure domain works..."
echo "Root domain needs: scholarixstudy.com -> scholarix-study-abroad.pages.dev"