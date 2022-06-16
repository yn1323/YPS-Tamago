import { FC } from 'react'

import { Button } from '@chakra-ui/react'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

type PropTypes = {
  show: boolean
  hoge?: '11' | '22'
}

const TopPage: FC<PropTypes> = ({ show, hoge }) => {
  return (
    <>
      <MetaTags title="Top" description="Top page" />
      <h1>TopPage</h1>
      {show && <Button data-testid="close">aaaa</Button>}
      {!show && <Button data-testid="close">not Show</Button>}
      <p>
        Find me in <code>./web/src/pages/TopPage/TopPage.tsx</code>
      </p>
      <p>
        My default route is named <code>top</code>, link to me with `
        <Link to={routes.top()}>Top</Link>`
      </p>
    </>
  )
}

export default TopPage
