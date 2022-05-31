import { Box, Flex, Image } from '@chakra-ui/react'
import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { colors } from '../../utils/constants'
import { useAuth } from '../context/AuthProvider'
import MovieFilter from '../movies/MovieFilter'
import NavItem from './NavItem'

const Navigation = () => {
  const { user, onLogout } = useAuth()
  const location = useLocation()

  return (
    <Box bgColor={colors.nav} w="100%" p="1rem" borderRadius="0.5rem">
      <nav>
        <Flex>
          <NavLink to={'/'}>
            <Image h="4rem" src="/moviecult_logo.png" />
          </NavLink>
          <Flex
            w="100%"
            alignItems="center"
            justifyContent="space-between"
            flexWrap="wrap"
          >
            <Flex ml="2rem" gridGap="2rem">
              <NavItem to="/" title="Home" />
              <NavItem to={user ? '/favorites' : 'login'} title="Favorites" />
            </Flex>
            <Flex gridGap="2rem" mr="2rem" alignItems="center">
              {location.pathname === '/' && <MovieFilter />}
              {user ? (
                <NavItem to="/" title="Log out" onClick={() => onLogout()}>
                  Log out
                </NavItem>
              ) : (
                <NavItem to="/login" title="Log In" />
              )}
            </Flex>
          </Flex>
        </Flex>
      </nav>
    </Box>
  )
}

export default Navigation