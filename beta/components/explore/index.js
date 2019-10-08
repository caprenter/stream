const Nanocomponent = require('choo/component')
const html = require('choo/html')
const equals = require('is-equal-shallow')

class Explore extends Nanocomponent {
  constructor (name, state, emit) {
    super(name)

    this.state = state
    this.emit = emit
  }

  createElement (props) {
    this.user = props.user

    const USER_SCOPE = this.user.username ? `/${this.user.username}` : ''

    return html`
      <nav role="navigation" aria-label="App navigation" class="bg-black white sticky z-4 br bw b--near-black" style="min-width:300px;top: calc(var(--height-3) * 2)">
        <ul class="list overflow-auto ma0 pa0 pb7" style="max-width:300px;height:100vh">
          <li class="lh-copy bb bw b--near-black">
            <a href="/artists" class="link flex items-center pv3 pl3 dim dropdown-toggle">
              Browse
            </a>
            <ul class="list ma0 pa0 dropdown">
              <li>
                <a class="link db dim pv2 pl4 w-100" href="/artists">Artists</a>
              </li>
              <li>
                <a class="link db dim pv2 pl4 w-100" href="/labels">Labels</a>
              </li>
              <li>
                <a class="link db dim pv2 pl4 w-100" href="/playlist/latest">New</a>
              </li>
            </ul>
          </li>
          <li class="lh-copy bb bw b--near-black">
            <a href="${USER_SCOPE}/library/favorites" class="link flex items-center pv3 pl3 dim dropdown-toggle">
              Library
            </a>
            <ul class="list ma0 pa0 dropdown">
              <li>
                <a class="link db dim pv2 pl4 w-100" href="${USER_SCOPE}/library/favorites">Favorites</a>
              </li>
              <li>
                <a class="link db dim pv2 pl4 w-100" href="${USER_SCOPE}/library/owned">Owned</a>
              </li>
              <li>
                <a class="link db dim pv2 pl4 w-100" href="${USER_SCOPE}/library/history">History</a>
              </li>
            </ul>
          </li>
          <li class="lh-copy bb bw b--near-black">
            <a href="/playlist/top-fav" class="link flex items-center pv3 pl3 dim">
              Top Favorites
            </a>
          </li>
          <li class="lh-copy bb bw b--near-black">
            <a href="/playlist/staff-picks" class="link flex items-center pv3 pl3 dim">
              Staff Picks
            </a>
          </li>
          <li class="lh-copy bb bw b--near-black">
            <a href="https://resonate.is/music/support/" class="link flex items-center pv3 pl3 dim" target="_blank" rel="noopener noreferer">
              Support
            </a>
          </li>
        </ul>
      </nav>
    `
  }

  update (props) {
    return !equals(props.user, this.user)
  }
}

module.exports = Explore
