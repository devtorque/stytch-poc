import { StytchB2B } from '@stytch/react/b2b';
import { AuthFlowType, B2BProducts } from '@stytch/vanilla-js/b2b';

const LoginOrSignup = () => {
   const config = {
      products: [B2BProducts.emailMagicLinks, B2BProducts.oauth],
      oauthOptions: {
        providers: [{ type: 'google' }]
      },
      sessionOptions: { sessionDurationMinutes: 60 },
      authFlowType: AuthFlowType.Discovery,
    };

   return <StytchB2B config={config} />;
};

export default LoginOrSignup;
