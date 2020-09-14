+++ categories = [""] tags = [""] title = "Onedrive" date =
"2020-09-13T20:56:46-07:00" draft = false +++

# How to do obtain a hash from onedrive

## Motivation

If you upload a large file like a 4GB file to OneDrive, you might wondering
whether it uploaded correctly.  I am kind of paranoid about such things, since
I want to delete the 4GB in my local drive to free up some space, but at the
same time I rather not lose any of my data.

## Verification

Onedrive provides three types of hashes for a file.  I could only get one of
them to display anything, so I will describe how this can be done.

- sha1Hash	String	(Hex string). SHA1 hash for the contents of the file (if
  available). Read-only.

- crc32Hash	String	(Hex string). The CRC32 value of the file in little endian
  (if available). Read-only.

- quickXorHash	String	(Base64 string). A proprietary hash of the file that
  can be used to determine if the contents of the file have changed (if
  available). Read-only.

[Hashes](https://docs.microsoft.com/en-us/onedrive/developer/rest-api/resources/hashes?view=odsp-graph-online)

# SDK to the rescue

Fortunately there is a onedrive-sdk in python which is a bit old but since
the API hasn't change much, it mostly works.

# Overview of the steps

For any script to work you have to register the application with microsoft,
which gives you a client_id.  After registering, you can go to the secret
section obtain a secret key as well, this will serve as your client_secret.
Then one more thing you need to setup if the redirect URI, it doesn't have to
be a real site, but it is necessary to match the one that the application uses.

## Registration

You first have to have an account with microsoft, so that you can enter
portal.azure.com.  From there you can either search app registrations,
or it should be on the first services that is shown.

In App registrations, you want to create a new registration, and you should add
the redirect URI at this point (it can be added later, but it is a little bit
more painful because it is not very clear where to do this).  Note that it only
really works for Personal Microsoft accounts only, the other organizational
directories are pertinent only in a multiple user scenario.

The name of the app doesn't really matter, but the redirect URI must match
the one that you use for authentication.

Copy the client id and save it into a json file, I prefer doing it that way
rather than directly coding in to my app.

## Secret

Then choose the secret menus, and generate a secret as well.

## json file

client.json would look something 

```json
{
 "id": "the client id",
 "secret": "the client secret",
 "code": "the code"
}
```

# Using the sdk

## Install

I think the best is to clone the github repository and

```bash
python setup.py install
```

There are `pip` instructions as well, but for my distribution
python 3.8, it didn't have a version that is current with my
python.

## Getting the authentication code 

```python
import onedrivesdk
import json

json_file = 'client.json'
redirect_uri = 'http://localhost:8080/'
with open(json_file) as f:
    jobj = json.load(f)

client_secret = jobj['secret'] 
client_id=jobj['id']
api_base_url='https://api.onedrive.com/v1.0/'
scopes=['wl.signin', 'wl.offline_access', 'onedrive.readwrite']

http_provider = onedrivesdk.HttpProvider()
auth_provider = onedrivesdk.AuthProvider(
    http_provider=http_provider,
    client_id=client_id,
    scopes=scopes)

client = onedrivesdk.OneDriveClient(api_base_url, auth_provider, http_provider)
auth_url = client.auth_provider.get_auth_url(redirect_uri)
# Ask for the code
print('Paste this URL into your browser, approve the app\'s access.')
print('Copy everything in the address bar after "code=", and paste it below.')
print(auth_url)
code = input('Paste code here: ')

client.auth_provider.authenticate(code, redirect_uri, client_secret)
```

There is another script that supposed opens a web server from python didn't
quite work out of the box.  There is another script that removes the manual 
step above.   But I didn't work out why the webserver was not working.

## code validity

The code lasts for a little while, so I typically add to the client.json we
created above.

## Command-line example

There is a command-line example in the cloned repository under example.
I commented out the part that asks for the code, since that didn't work 
for me.  

# links

## portal

All services - Microsoft Azure
https://portal.azure.com/#allservices

## registering via PowerShell
PowerShell Basics: How to Create an Azure AD App Registration
https://techcommunity.microsoft.com/t5/itops-talk-blog/powershell-basics-how-to-create-an-azure-ad-app-registration/ba-p/811570

## registering from portal

Register an application - Microsoft Azure
https://portal.azure.com/#blade/Microsoft_AAD_RegisteredApps/ApplicationsListBlade

## Oauth

OAuth 2.0 client credentials flow on the Microsoft identity platform | Microsoft Docs
https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-client-creds-grant-flow

## Key vault

What is Azure Key Vault? | Microsoft Docs
https://docs.microsoft.com/en-us/azure/key-vault/general/basic-concepts?WT.mc_id=ITOPSTALK-blog-abartolo

Key vaults - Microsoft Azure
https://portal.azure.com/#blade/HubsExtension/BrowseResource/resourceType/Microsoft.KeyVault%2Fvaults

