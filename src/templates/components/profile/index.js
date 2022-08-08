import tpl from './tpl';
import './style.scss';
import Component from '../../../services/Component';

class Profile extends Component {
  addEvents() {
    const $changeProfile = this.element.querySelector('.profile__change-data');
    $changeProfile?.addEventListener('click', this.props.events.changeProfile);

    const $saveProfileData = this.element.querySelector('.profile__data');
    $saveProfileData?.addEventListener('submit', this.props.events.saveProfileData);

    const $changePassword = this.element.querySelector('.profile__button-change-password');
    $changePassword?.addEventListener('click', this.props.events.changePassword);

    const $exitProfile = this.element.querySelector('.profile__signout');
    $exitProfile?.addEventListener('click', this.props.events.exitProfile);

    const $formChangePassword = this.element.querySelector('.profile__change-password');
    $formChangePassword?.addEventListener('submit', this.props.events.savePassword);

    const $changeAvatar = this.element.querySelector('.profile__change-avatar');
    $changeAvatar?.addEventListener('click', this.props.events.changeAvatar);

    this.element.querySelectorAll('.form__input').forEach((input) => {
      input.addEventListener('focus', this.props.events.focus);
      input.addEventListener('blur', this.props.events.blur);
    });
  }

  render() {
    return this.compile(tpl);
  }
}

export default Profile;
