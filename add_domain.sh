#!/bin/bash
# Cloudflare API Script to Add Custom Domain

CLOUDFLARE_API_TOKEN="qYarMfEkOP_5s2dbaPC2MJCSJgfJ_EEoqtrVGJur"
ACCOUNT_ID="5ca87478e09d6ebc6954f770ac4656e8"
PROJECT_NAME="scholarix-study-abroad"
DOMAIN="scholarixstudy.com"

echo "Adding custom domain $DOMAIN to project $PROJECT_NAME..."

# Add custom domain via API
curl -X POST "https://api.cloudflare.com/client/v4/accounts/$ACCOUNT_ID/pages/projects/$PROJECT_NAME/domains" \
     -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN" \
     -H "Content-Type: application/json" \
     -d '{"name":"'$DOMAIN'"}'

echo ""
echo "Domain addition requested. Checking status..."

# Get project info
curl -X GET "https://api.cloudflare.com/client/v4/accounts/$ACCOUNT_ID/pages/projects/$PROJECT_NAME" \
     -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN" \
     -H "Content-Type: application/json"