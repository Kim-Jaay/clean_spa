import React from 'react'

const MainContent = ({ word }) => {

    //const {word} = props;
    return (
        <div className='MainContent'>
            <div className="inner">
                {
                    word.map((con, idx) => {
                        return (
                            <figure key={con.id}>
                                <img src={process.env.PUBLIC_URL + `/assets/images/main_s01${idx + 1}.jpg`} alt="" />
                            </figure>
                        )
                    })

                }
            </div>
        </div>
    )
}

export default MainContent