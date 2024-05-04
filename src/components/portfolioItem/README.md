/portfolio/page.tsx の各要素用のコンポーネント。以下の形で利用する。

<PORItemContainer>
    <PORUpperItem>
        <PORItemLogo>
            ここにReact Iconsのコンポーネント。
            プロパティのsizeは50を推奨
        </PORItemLogo>
        <PORItemTitle>
            ここにタイトルを記述
        </PORItemTitle>
    </PORUpperItem>
    <PORLowerItem> 
        ここに詳細を記述                  
    </PORLowerItem>
</PORItemContainer>

<PORItems></PORItems>で全体を包む