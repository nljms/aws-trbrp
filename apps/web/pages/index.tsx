// import { Button } from "ui";

import Amplify from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css'
Amplify.configure({
  aws_cognito_region: 'ap-southeast-2', // (required) - Region where Amazon Cognito project was created
  // aws_user_pools_id: 'us-east-1_6AfQ6', // (optional) -  Amazon Cognito User Pool ID
  aws_user_pools_web_client_id: '5t3le8878kgc72', // (optional) - Amazon Cognito App Client ID (App client secret needs to be disabled)
  aws_cognito_identity_pool_id:
    'us-east-1:f602c14b-0fde-409c-9a7e-0baccbfd87d0', // (optional) - Amazon Cognito Identity Pool ID
  aws_mandatory_sign_in: 'enable'
})


interface HomeProps {
  signOut: () => void
  user: any
}

function Home({signOut,user}: HomeProps){
    return (
        <>
          <h1>hello {user.username}</h1>
          <button onClick={signOut}>Sign Out</button>
        </>
      )
}
export default withAuthenticator(Home)
