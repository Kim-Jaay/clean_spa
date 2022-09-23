import React from 'react'

const Footer = ({ profile }) => {
    return (
        <footer className='Footer'>
            <address>
                {profile.address}
            </address>
            <ul className="ft_con">
                <li>사업자등록번호 : {profile.number}</li>
                <li>Tel : {profile.tel}</li>
                <li>e-mail : {profile.email}</li>
            </ul>
            <span>&copy; {profile.name} All Rights Reserved.</span>
        </footer>

    )
}

export default Footer