import Layout from '../templates/components/layout';
import Component from "../services/Component";
import {Props} from "../types/component";

const layout = (props: Props = {}): Component => {
  return new Layout(props);
};

export default layout;
