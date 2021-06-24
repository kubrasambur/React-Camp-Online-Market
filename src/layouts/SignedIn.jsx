import React from 'react'
import { Menu,Image, Dropdown } from 'semantic-ui-react'

//fonksiyonun içine props yazmak yerine obje olarak {signOut} yazabiliriz
export default function SignedIn({signOut}) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="data:image/jpeg;base64,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"/>
                <Dropdown pointing="top left" text="Kübra">
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon="info"/>
                        <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out"/>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}