import React from 'react';
import styled from 'styled-components/native';

//components
import {Title, Content, DynamicText, Spacer} from 'components';

//assets
import BackgroundImage from 'assets/images/onboarding-background.png';
import OnboardingMainIcon from 'assets/svg/onboarding_1_main.svg';
import LoginWithEmail from 'assets/svg/login.svg';
import Apple from 'assets/svg/Apple.svg';
import Google from 'assets/svg/Google.svg';
import Facebook from 'assets/svg/Facebook.svg';

const App = () => {
  return (
    <Background source={BackgroundImage}>
      <Container>
        <TopImage>
          <OnboardingMainIcon />
        </TopImage>
        <InfoSection>
          <Title text={`Create\nGood Habits`} />
          <Content
            text={
              'Change your life by slowly adding new healthy habits and sticking to them.'
            }
          />
        </InfoSection>
        <LoginSection>
          <LoginButton>
            <LoginWithEmail />
            <LoginButtonText>Continue with E-mail</LoginButtonText>
          </LoginButton>

          <SocialLoginSection>
            <SocialLoginButton>
              <Apple />
              <LoginButtonText>Apple</LoginButtonText>
            </SocialLoginButton>
            <SocialLoginButton>
              <Google />
              <LoginButtonText>Google</LoginButtonText>
            </SocialLoginButton>
            <SocialLoginButton>
              <Facebook />
              <LoginButtonText>Facebook</LoginButtonText>
            </SocialLoginButton>
          </SocialLoginSection>
        </LoginSection>
        <Spacer height={12} />
        <DynamicText
          customContainerStyle={{marginHorizontal: 24}}
          text="By continuing you agree Terms of Services & Privacy Policy"
          actions={[() => {}, () => {}]}
        />
      </Container>
    </Background>
  );
};

export default App;

const Background = styled.ImageBackground`
  flex: 1;
  justify-content: center;
`;

const Container = styled.ScrollView`
  flex: 1;
`;

const TopImage = styled.View`
  margin-top: 16px;
  margin-right: 7px;
  align-items: flex-end;
`;
const InfoSection = styled.View`
  padding-horizontal: 24px;
  margin-top: 16px;
`;

const LoginSection = styled.View`
  margin-horizontal: 24px;
  margin-top: 48px;
`;

const LoginButton = styled.TouchableOpacity`
  background-color: #fff;
  padding-vertical: 16px;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  flex-direction: row;
  gap: 4px;
`;
const LoginButtonText = styled.Text`
  color: #040415;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
`;

const SocialLoginSection = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 24px;
`;

const SocialLoginButton = styled.TouchableOpacity`
  background-color: #fff;
  align-items: center;
  border-radius: 40px;
  padding-horizontal: 16px;
  padding-vertical: 8px;
  flex-direction: row;
  gap: 4px;
`;
