#!/bin/bash
# Usage: ./test_auth.sh

API_URL="http://localhost:3000/api/auth"
EMAIL="admin@pharma.com"
PASSWORD="adminpass"

# 1. Register (ignore errors if already registered)
echo "Registering user..."
curl -s -X POST "$API_URL/register" \
  -H 'Content-Type: application/json' \
  -d '{"name":"Admin","email":"'$EMAIL'","password":"'$PASSWORD'","role":"admin"}'
echo -e "\n"

# 2. Login and extract token
echo "Logging in..."
LOGIN_RESPONSE=$(curl -s -X POST "$API_URL/login" \
  -H 'Content-Type: application/json' \
  -d '{"email":"'$EMAIL'","password":"'$PASSWORD'"}')
TOKEN=$(echo $LOGIN_RESPONSE | grep -o '"token":"[^"]*"' | cut -d'"' -f4)
echo "Token: $TOKEN"

# 3. Get current user
echo "\nGetting current user..."
curl -s -X GET "$API_URL/me" -H "Authorization: Bearer $TOKEN"
echo -e "\n"

# 4. List all users (admin only)
echo "\nListing all users (admin only)..."
curl -s -X GET "$API_URL/users" -H "Authorization: Bearer $TOKEN"
echo -e "\n"
