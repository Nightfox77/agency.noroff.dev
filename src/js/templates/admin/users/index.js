import { clearSearchResults } from "../../../ui/search/components/clearSearchResults.js";

/**
 * Template for rendering all profiles on to page.
 */

export function userTemplate(userData) {
    const profile = document.createElement('div');
    profile.classList.add('row', 'px-5');

    const nameContainer = document.createElement('p');
    nameContainer.classList.add('col-5', 'bg-light', 'px-2', 'py-3', 'mb-2');
    const name = userData.fullName;
    nameContainer.append(name);
    profile.appendChild(nameContainer);

    const emailContainer = document.createElement('p');
    emailContainer.classList.add('col-5', 'bg-light', 'px-2', 'py-3', 'mb-2');
    const email = userData.email;
    emailContainer.append(email);
    profile.appendChild(emailContainer);

    const activeContainer = document.createElement('div');
    activeContainer.classList.add('col-1', 'd-none', 'd-lg-block', 'text-center', 'py-3',);
    const active = document.createElement('i');
    if (userData.isActive === true) {
        active.classList.add('fa-solid', 'fa-check');
        activeContainer.appendChild(active);
    } else {
        active.classList.add('fa-solid', 'fa-xmark');
        activeContainer.appendChild(active);
    }
    profile.appendChild(activeContainer);

    const deleteProfileContainer = document.createElement('div');
    deleteProfileContainer.classList.add('col-2', 'col-lg-1', 'text-center', 'py-3',);
    const deleteProfile = document.createElement('i');
    deleteProfile.classList.add('fa-solid', 'fa-trash');
    deleteProfileContainer.appendChild(deleteProfile);
    profile.appendChild(deleteProfileContainer);

    return profile;
}

HTMLElement.prototype.clear = clearSearchResults;

export function renderUsersTemplate(userDataList, parent) {
    usersContainer.clear();
    parent.append(...userDataList.map(userTemplate));
  }