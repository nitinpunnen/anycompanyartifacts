export type AmplifyDependentResourcesAttributes = {
    "auth": {
        "anycompanyartifacts418ed585": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "UserPoolId": "string",
            "UserPoolArn": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string"
        }
    },
    "api": {
        "anycompanyartifacts": {
            "GraphQLAPIKeyOutput": "string",
            "GraphQLAPIIdOutput": "string",
            "GraphQLAPIEndpointOutput": "string"
        },
        "testApi": {
            "RootUrl": "string",
            "ApiName": "string",
            "ApiId": "string"
        },
        "searchArtifacts": {
            "RootUrl": "string",
            "ApiName": "string",
            "ApiId": "string"
        }
    },
    "storage": {
        "anyspecification": {
            "BucketName": "string",
            "Region": "string"
        }
    },
    "function": {
        "testFunction": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        },
        "artifactStoreSearchKendra": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        },
        "artifactStoreSearchNeptune": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        }
    }
}