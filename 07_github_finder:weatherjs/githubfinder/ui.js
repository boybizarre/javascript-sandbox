class UI {
  constructor() {
    this.profile = document.getElementById('profile');
  }

  // Show user profile
  showProfile(user) {
    this.profile.innerHTML = `
    <div class="card card-body mb-3">
      <div class="row">
        <div class="col-md-3">
          <img class="img-fluid mb-2" src="${user.avatar_url}">
          <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block">View Profile</a>
        </div>
        <div class="col-md-9">
          <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
          <span class="badge badge-primary">Public Gists: ${user.public_gists}</span>
          <span class="badge badge-primary">Following: ${user.following}</span>
          <span class="badge badge-primary">Followers ${user.followers}</span>
          <br><br>
          <ul class="list-group">
            <li class="list-group-item">Company: ${user.company}</li>
            <li class="list-group-item">Website/Blog: ${user.blog}</li>
            <li class="list-group-item">Location: ${user.location}</li>
            <li class="list-group-item">Member Since: ${user.created_at}</li>
          </ul>
        </div>
      </div>
    </div>

    <h3 class="page-heading mb-3">Latest Repos</h3>
    <div id="repos"></div>
    `;
  }

  // Show user repos
  showRepos(repos) {
    let output = '';

    repos.forEach(repo => {
      output += `
      <div class="card card-body mb-2">
        <div class="row">
          <div className="col-6">
            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
          </div>
          <div className="col-6">
            <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
            <span class="badge badge-primary">Watchers: ${repo.watchers_count}</span>
            <span class="badge badge-primary">Forks: ${repo.forms_count}</span>  
          </div>  
        </div>
      </div>
      `;
    });

    // Output repos
    document.getElementById('profile').innerHTML = output;
  }
  

  // Show alert message
  showAlert(message, className) {
    //  Clear current alerts
    this.clearAlert();

    // Create div
    const div = document.createElement('div');

    // Add classes
    div.className = className;

    // Add text
    div.appendChild(document.createTextNode(message));

    // Get parent element
    const container = document.querySelector('.searchContainer');

    // Get search box
    const search = document.querySelector('.search');

    // Insert alert
    container.insertBefore(div, search);

    // Timeout after 3 secs
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  // Clear alert
  clearAlert() {
    const currentAlert = document.querySelector('.alert-danger');

    if (currentAlert) {
      currentAlert.remove();
    }
  }

  // Clear profile
  clearProfile() {
    this.profile.innerHTML = '';
  }
}
