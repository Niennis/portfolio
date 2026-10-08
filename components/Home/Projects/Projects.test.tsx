import '@testing-library/jest-dom'
import { fireEvent, render, screen, within } from '@testing-library/react'
import Projects from './Projects'
import { getProjectGroups } from '@/constant/projects'
import es from '@/i18n/dictionaries/es'

const projectGroups = getProjectGroups('es')

const [workGroup, personalGroup] = projectGroups
const firstProject = workGroup.projects[0]

describe('Projects', () => {
  const getPanel = () => screen.getByRole('tabpanel')

  it('shows one tab list per group and the first project selected', () => {
    render(<Projects groups={projectGroups} dict={es.projects} />)

    expect(screen.getAllByRole('tablist')).toHaveLength(projectGroups.length)
    expect(screen.getByRole('tab', { name: firstProject.tabLabel ?? firstProject.name })).toHaveAttribute('aria-selected', 'true')
    expect(within(getPanel()).getByRole('heading', { level: 3 })).toHaveTextContent(firstProject.name)
  })

  it('shows the clicked project in the panel', () => {
    render(<Projects groups={projectGroups} dict={es.projects} />)

    const target = personalGroup.projects[1]
    fireEvent.click(screen.getByRole('tab', { name: target.tabLabel ?? target.name }))

    expect(screen.getByRole('tab', { name: target.tabLabel ?? target.name })).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByRole('tab', { name: firstProject.tabLabel ?? firstProject.name })).toHaveAttribute('aria-selected', 'false')
    expect(within(getPanel()).getByRole('heading', { level: 3 })).toHaveTextContent(target.name)
    expect(getPanel()).toHaveAttribute('aria-labelledby', `tab-${target.id}`)
  })

  it('moves between tabs of a group with the arrow keys, Home and End', () => {
    render(<Projects groups={projectGroups} dict={es.projects} />)

    const tabs = within(screen.getAllByRole('tablist')[0]).getAllByRole('tab')
    tabs[0].focus()

    fireEvent.keyDown(tabs[0], { key: 'ArrowRight' })
    expect(tabs[1]).toHaveFocus()
    expect(tabs[1]).toHaveAttribute('aria-selected', 'true')

    fireEvent.keyDown(tabs[1], { key: 'End' })
    expect(tabs[tabs.length - 1]).toHaveFocus()

    fireEvent.keyDown(tabs[tabs.length - 1], { key: 'ArrowRight' })
    expect(tabs[0]).toHaveFocus()

    fireEvent.keyDown(tabs[0], { key: 'ArrowLeft' })
    expect(tabs[tabs.length - 1]).toHaveFocus()

    fireEvent.keyDown(tabs[tabs.length - 1], { key: 'Home' })
    expect(tabs[0]).toHaveFocus()
  })

  it('keeps a single Tab stop per group', () => {
    render(<Projects groups={projectGroups} dict={es.projects} />)

    const [workTabs, personalTabs] = screen.getAllByRole('tablist').map((list) => within(list).getAllByRole('tab'))

    expect(workTabs.filter((tab) => tab.tabIndex === 0)).toEqual([workTabs[0]])
    expect(personalTabs.filter((tab) => tab.tabIndex === 0)).toEqual([personalTabs[0]])

    fireEvent.click(personalTabs[2])
    expect(personalTabs.filter((tab) => tab.tabIndex === 0)).toEqual([personalTabs[2]])
    expect(workTabs.filter((tab) => tab.tabIndex === 0)).toEqual([workTabs[0]])
  })
})
