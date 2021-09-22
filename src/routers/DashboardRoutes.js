import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { dcScreen } from '../components/dc/DcScreen/dcScreen'
import { HeroScreen } from '../components/heroes/HeroScreen'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { SearchScreen } from '../components/search/SearchScreen'
import { Navbar } from '../components/ui/Navbar'

export const DashboardRoutes = () => {
    return (
        <>
          <Navbar />  
          <div className="container mt-2">
              <Switch>
                  <Route exact path='/marvel' component={MarvelScreen} />
                  <Route exact path='/hero/:id' component={HeroScreen} />
                  <Route exact path='/dc' component={dcScreen} />
                  <Route exact path='/search' component={SearchScreen} />
                  <Redirect to='/marvel' />
              </Switch>
          </div>
        </>
    )
}
