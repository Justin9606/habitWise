import React from 'react';
import styled from 'styled-components/native';

// components
import {
  Title,
  Content,
  DynamicText,
  Spacer,
  SecondaryButton,
  PrimaryButton,
  CustomImage,
} from 'components';

// assets
import BackgroundImage from 'assets/images/onboarding-background.png';
import OnboardingMainIcon from 'assets/svg/onboarding_1_main.svg';
import LoginWithEmail from 'assets/svg/login.svg';
import Apple from 'assets/svg/Apple.svg';
import Google from 'assets/svg/Google.svg';
import Facebook from 'assets/svg/Facebook.svg';
import {Alert} from 'react-native';

const OnboardingScreen = () => {
  const secondaryButtons = [
    {
      icon: <Apple />,
      text: 'Apple',
      onPress: () => Alert.alert('Login with Apple is coming...'),
    },
    {
      icon: <Google />,
      text: 'Google',
      onPress: () => Alert.alert('Login with Google is coming...'),
    },
    {
      icon: <Facebook />,
      text: 'Facebook',
      onPress: () => Alert.alert('Login with Facebook is coming...'),
    },
  ];

  return (
    <Background source={BackgroundImage}>
      <Container>
        <TopImage>
          <CustomImage source={OnboardingMainIcon} />
        </TopImage>

        <InfoSection>
          <Title text={`Create\nGood Habits`} />
          <Spacer height={20} />
          <Content
            text={
              'Change your life by slowly adding new healthy habits and sticking to them.'
            }
          />
        </InfoSection>

        <LoginSection>
          <PrimaryButton
            text="Login with Email"
            icon={<LoginWithEmail />}
            onPress={() => console.log('Login pressed')}
          />

          <SocialLoginSection>
            <SecondaryButton buttons={secondaryButtons} />
          </SocialLoginSection>
        </LoginSection>

        <Spacer height={12} />
        <DynamicText
          customContainerStyle={{marginHorizontal: 24, marginTop: 20}}
          text="By continuing you agree to the Terms of Services & Privacy Policy"
          actions={[() => {}, () => {}]}
        />
      </Container>
    </Background>
  );
};

export default OnboardingScreen;

const Background = styled.ImageBackground`
  flex: 1;
  justify-content: center;
`;

const Container = styled.ScrollView``;

const TopImage = styled.View`
  margin-top: 20px;
  margin-right: 7px;

  justify-content: center;
`;

const InfoSection = styled.View`
  padding-horizontal: 24px;
  margin-top: 40px;
`;

const LoginSection = styled.View`
  margin-horizontal: 24px;
  margin-top: 20px;
`;

const SocialLoginSection = styled.View`
  margin-top: 24px;
`;
