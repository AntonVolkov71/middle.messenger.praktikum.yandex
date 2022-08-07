import tpl from './tpl';
import './style.scss';
import Component from '../../../services/Component';

class Profile extends Component {
  addEvents() {
    const $changeProfile = this._element.querySelector('.profile__change-data');
    $changeProfile?.addEventListener('click', this._props.events.changeProfile);

    const $saveProfileData = this._element.querySelector('.profile__data');
    $saveProfileData?.addEventListener('submit', this._props.events.saveProfileData);

    const $changePassword = this._element.querySelector('.profile__button-change-password');
    $changePassword?.addEventListener('click', this._props.events.changePassword);

    const $exitProfile = this._element.querySelector('.profile__signout');
    $exitProfile?.addEventListener('click', this._props.events.exitProfile);

    const $formChangePassword = this._element.querySelector('.profile__change-password');
    $formChangePassword?.addEventListener('submit', this._props.events.savePassword);

    const $changeAvatar = this._element.querySelector('.profile__change-avatar');
    $changeAvatar?.addEventListener('click', this._props.events.changeAvatar);

    this._element.querySelectorAll('.form__input').forEach((input) => {
      input.addEventListener('focus', this._props.events.focus);
      input.addEventListener('blur', this._props.events.blur);
    });
  }

  render() {
    return this.compile(tpl);
  }
}

export default Profile;
