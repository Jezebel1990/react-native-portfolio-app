import  {View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Profile } from '../../components/Profile/Profile';
import { SocialButton } from "../../components/SocialButton/SocialButton";
import styles from './Style';
import { GradientLayout } from '../../components/GradientLayout/GradientLayout';
export default function MainScreen(){
return (
<GradientLayout>
<View style={styles.profileContainer}>
        <Profile/>
        </View>

<Text style={styles.nameProfile}>Jezebel Guedes</Text>
<Text style={styles.description}>Desenvolvedora Web em constante aprendizagem.</Text>

 <View style={styles.buttonsContainer}>
        <SocialButton
          title="LinkedIn"
          icon="logo-linkedin"
          color="#eff3f54c"
          url="https://www.linkedin.com/in/jezebel-guedes"
        />

        <SocialButton
          title="GitHub"
          icon="logo-github"
          color="#eff3f54c"
          url="https://github.com/Jezebel1990"
        />

        <SocialButton
          title="E-mail"
          icon="mail"
          color="#eff3f54c"
          url="mailto:jezebelguedes@gmail.com"
        />
</View>
 <StatusBar style="light" />
</GradientLayout>

);
}