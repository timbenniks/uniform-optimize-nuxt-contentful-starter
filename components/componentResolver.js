import MainHero from "./Hero";
import CallToAction from "./CallToAction/CallToAction";
import PersonalizedHero from "./PersonalizedHero";
import TalkList from "./TalkList/TalkList";
import RegisterForm from "./RegisterForm";
import WhyAttend from "./WhyAttend";

import Introduction from "../components/Introduction";
import RichText from "../components/RichText";
import Carousel from "../components/Carousel";
import Exercise from "../components/Exercise";

const componentMap = {
  hero: MainHero,
  cta: CallToAction,
  // that's 'personalized hero' to you, sir.
  "3zPkEj1KqeSn4QdsdnNKO3": PersonalizedHero,
  talksList: TalkList,
  registrationForm: RegisterForm,
  whyAttend: WhyAttend,
};

export function componentResolver(variantType) {
  const component = componentMap[variantType];
  console.log(component);
  if (!component) {
    // eslint-disable-next-line no-console
    console.warn(
      `Component for variantType '${variantType}' could not be resolved.`
    );
  }
  return component;
}
