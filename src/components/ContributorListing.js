import React from 'react'
import PropTypes from "prop-types"
import { Link } from "gatsby"

const ContributorListing = (data) => {
  const emojiKey = role => {
    switch (role) {
      case 'ally': 
        return <span role="img" aria-label={role}>♿️</span>
      case 'bug': 
        return <span role="img" aria-label={role}>🐛</span>
      case 'blog': 
        return <span role="img" aria-label={role}>📝</span>
      case 'business': 
        return <span role="img" aria-label={role}>💼</span>
      case 'code': 
        return <span role="img" aria-label={role}>💻</span>
      case 'content': 
        return <span role="img" aria-label={role}>🖋</span>
      case 'data': 
        return <span role="img" aria-label={role}>🔣</span>
      case 'doc': 
        return <span role="img" aria-label={role}>📖</span>
      case 'design': 
        return <span role="img" aria-label={role}>🎨</span>
      case 'example': 
        return <span role="img" aria-label={role}>💡</span>
      case 'eventOrganizing': 
        return <span role="img" aria-label={role}>📋</span>
      case 'financial': 
        return <span role="img" aria-label={role}>💵</span>
      case 'fundingFinding': 
        return <span role="img" aria-label={role}>🔍</span>
      case 'ideas': 
        return <span role="img" aria-label={role}>🤔</span>
      case 'infra': 
        return <span role="img" aria-label={role}>🚇</span>
      case 'maintenance': 
        return <span role="img" aria-label={role}>🚧</span>
      case 'platform': 
        return <span role="img" aria-label={role}>📦</span>
      case 'plugin': 
        return <span role="img" aria-label={role}>🔌</span>
      case 'projectManagement': 
        return <span role="img" aria-label={role}>📆</span>
      case 'question': 
        return <span role="img" aria-label={role}>💬</span>
      case 'review': 
        return <span role="img" aria-label={role}>👀</span>
      case 'security': 
        return <span role="img" aria-label={role}>🛡️</span>
      case 'tool': 
        return <span role="img" aria-label={role}>🔧</span>
      case 'translation': 
        return <span role="img" aria-label={role}>🌍</span>
      case 'test': 
        return <span role="img" aria-label={role}>⚠️</span>
      case 'tutorial': 
        return <span role="img" aria-label={role}>✅</span>
      case 'talk': 
        return <span role="img" aria-label={role}>📢</span>
      case 'userTesting': 
        return <span role="img" aria-label={role}>📓</span>
      case 'video': 
        return <span role="img" aria-label={role}>📹</span>
      default:
        return <span role="img" aria-label={role}>👋🏽</span>
    }
  }

  const renderContributorItems = data => {
    const contributorItem = data.data.map(contributor => {

      const renderRolesEmojis = contributor.roles.map(role => (
        <li className="contributor-role">{emojiKey(role)}</li>
      ))

      return (
        <li className="contributor-item">
          <div className="contributor-item-primary-content">
            <img src={contributor.avatar} alt={`avatar of ${contributor.name}`} className="contributor-avatar"/>
            <h4 className="contributor-name"><a href={contributor.profileUrl} className="contributor-name-link">{contributor.name}</a></h4>
            <h6 className="contributor-username">{contributor.username}</h6>
          </div>
          <ul className="contributor-roles-container">
            {renderRolesEmojis}
          </ul>
        </li>
      )
    })

    return contributorItem
  }

  return (
    <ul className="contributors-container">
      {renderContributorItems(data)}
    </ul>
  )
}

ContributorListing.propTypes = {
  data: PropTypes.array
};

export default ContributorListing