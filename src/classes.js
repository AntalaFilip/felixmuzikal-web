import React from 'react';
import './classes.css'


export default class Classes extends React.Component {
    render() {
        return (
            <div className="classes">
                <div className="header">
                    <h1>Zapojené triedy</h1>
                </div>
                <div className="list">
                    <div className="show">
                        <div className="class first">
                            <h2>Pandy</h2>
                            <h3>s muzikálom "Názov"</h3>
                            {/* eslint-disable-next-line */}
                            <h3>Viac info nájdete <a>na ich stránke</a></h3>
                        </div>
                        <div className="class second">
                            <h2>Sovy</h2>
                            <h3>s muzikálom "Vražda podľa obete"</h3>
                            <h3>Viac info nájdete <a href="https://sovy.felixmuzikal.sk">na ich stránke</a></h3>
                        </div>
                        <h4>Vás radi privítajú na ich predstavení [dátum] v [miesto] o [čas]</h4>
                        <h4>Lístky si môžete rezervovať <a href="/tickets/pandysovy">na tomto linku</a></h4>
                    </div>
                </div>
            </div>
        )
    }
}