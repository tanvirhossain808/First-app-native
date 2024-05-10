const client = new Client();

export const appWriteConfig = {
    endPoint: "https://cloud.appwrite.io/v1",
    platform: "com.first.native",
    projectId: "663e717600367b939b65",
    databaseId: "663e74040037037fec15",
    userCollectionId: "663e7456000fec35c172",
    videoCollectionId: "663e74040037037fec15",
    storageId: "663e77490016d6ea3f73"
}
import { Account, Client, ID } from 'react-native-appwrite';
// Init your React Native SDK

client
    .setEndpoint(appWriteConfig.endPoint) // Your Appwrite Endpoint
    .setProject(appWriteConfig.projectId) // Your project ID
    .setPlatform(appWriteConfig.platform) // Your application ID or bundle ID.
    ;


const account = new Account(client);

export const createUser = () => {
    // Register User

    account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
        .then(function (response) {
            console.log(response);
        }, function (error) {
            console.log(error);
        });

}
