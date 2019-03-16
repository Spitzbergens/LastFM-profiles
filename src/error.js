import React from 'react';


class Error extends React.Component {

    componentDidMount() {
        setTimeout(() => { document.location.reload(true) }, 5000)
    }


    render() {
        return (

            <section className="section">
                <div className="error-wrapper">
                    <p className="subtitle subtitle-error">
                        Something went wrong. :( There exists no user with that name.
                        Heading back in 5 seconds.
            </p>
                </div>

            </section>

        )
    }

}

export default Error;
