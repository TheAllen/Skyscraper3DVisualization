import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import L from 'leaflet';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Map, Marker, Popup, TileLayer, Circle, CircleMarker, Polygon, Polyline, Rectangle } from 'react-leaflet'
import { Card, Button, CardTitle, CardText, Navbar, NavbarBrand, Collapse, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownItem, DropdownMenu, NavbarToggler, DropdownToggle } from 'reactstrap';



import '../App.css'

var myIcon = L.icon({
    iconUrl: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaGVpZ2h0PSIyNCIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTEwMjguNCkiPjxwYXRoIGQ9Im0xMi4wMzEgMTAzMC40Yy0zLjg2NTcgMC02Ljk5OTggMy4xLTYuOTk5OCA3IDAgMS4zIDAuNDAxNyAyLjYgMS4wOTM4IDMuNyAwLjAzMzQgMC4xIDAuMDU5IDAuMSAwLjA5MzggMC4ybDQuMzQzMiA4YzAuMjA0IDAuNiAwLjc4MiAxLjEgMS40MzggMS4xczEuMjAyLTAuNSAxLjQwNi0xLjFsNC44NDQtOC43YzAuNDk5LTEgMC43ODEtMi4xIDAuNzgxLTMuMiAwLTMuOS0zLjEzNC03LTctN3ptLTAuMDMxIDMuOWMxLjkzMyAwIDMuNSAxLjYgMy41IDMuNSAwIDItMS41NjcgMy41LTMuNSAzLjVzLTMuNS0xLjUtMy41LTMuNWMwLTEuOSAxLjU2Ny0zLjUgMy41LTMuNXoiIGZpbGw9IiNjMDM5MmIiLz48cGF0aCBkPSJtMTIuMDMxIDEuMDMxMmMtMy44NjU3IDAtNi45OTk4IDMuMTM0LTYuOTk5OCA3IDAgMS4zODMgMC40MDE3IDIuNjY0OCAxLjA5MzggMy43NDk4IDAuMDMzNCAwLjA1MyAwLjA1OSAwLjEwNSAwLjA5MzggMC4xNTdsNC4zNDMyIDguMDYyYzAuMjA0IDAuNTg2IDAuNzgyIDEuMDMxIDEuNDM4IDEuMDMxczEuMjAyLTAuNDQ1IDEuNDA2LTEuMDMxbDQuODQ0LTguNzVjMC40OTktMC45NjMgMC43ODEtMi4wNiAwLjc4MS0zLjIxODggMC0zLjg2Ni0zLjEzNC03LTctN3ptLTAuMDMxIDMuOTY4OGMxLjkzMyAwIDMuNSAxLjU2NyAzLjUgMy41cy0xLjU2NyAzLjUtMy41IDMuNS0zLjUtMS41NjctMy41LTMuNSAxLjU2Ny0zLjUgMy41LTMuNXoiIGZpbGw9IiNlNzRjM2MiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMTAyOC40KSIvPjwvZz48L3N2Zz4=',
    iconSize: [64, 64],
    iconAnchor: [32, 60],
    popupAnchor: [-10, -90],

});

var parisIcon = L.icon({
    iconUrl: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDY0IDY0OyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qxe2ZpbGw6IzEwMTgyMDt9Cjwvc3R5bGU+PGc+PGc+PGNpcmNsZSBjbGFzcz0ic3QwIiBjeD0iMzIiIGN5PSIzMiIgcj0iMzIiLz48L2c+PGc+PHBhdGggY2xhc3M9InN0MSIgZD0iTTQ4LjczMiwzNC41Yy0wLjI3NiwwLTAuNS0wLjIyNC0wLjUtMC41YzAtMC44MjctMC42NzMtMS41LTEuNS0xLjVjLTAuNTM0LDAtMS4wMzIsMC4yODctMS4zLDAuNzUgICAgYy0wLjEzOSwwLjI0LTAuNDQ1LDAuMzIyLTAuNjgzLDAuMTgyYy0wLjIzOS0wLjEzOC0wLjMyMS0wLjQ0NC0wLjE4My0wLjY4M2MwLjQ0NS0wLjc3MSwxLjI3NS0xLjI0OSwyLjE2NS0xLjI0OSAgICBjMS4zNzksMCwyLjUsMS4xMjIsMi41LDIuNUM0OS4yMzIsMzQuMjc2LDQ5LjAwOSwzNC41LDQ4LjczMiwzNC41eiIvPjwvZz48Zz48cGF0aCBjbGFzcz0ic3QxIiBkPSJNNDguNzMyLDM0LjVjLTAuMjc2LDAtMC41LTAuMjI0LTAuNS0wLjVjMC0xLjM3OCwxLjEyMS0yLjUsMi41LTIuNWMwLjg5LDAsMS43MiwwLjQ3OSwyLjE2NSwxLjI0OSAgICBjMC4xMzksMC4yMzksMC4wNTcsMC41NDUtMC4xODMsMC42ODNjLTAuMjM3LDAuMTM4LTAuNTQ0LDAuMDU3LTAuNjgzLTAuMTgyYy0wLjI2OC0wLjQ2My0wLjc2Ni0wLjc1LTEuMy0wLjc1ICAgIGMtMC44MjcsMC0xLjUsMC42NzMtMS41LDEuNUM0OS4yMzIsMzQuMjc2LDQ5LjAwOSwzNC41LDQ4LjczMiwzNC41eiIvPjwvZz48Zz48cGF0aCBjbGFzcz0ic3QxIiBkPSJNNDkuNzMyLDM0LjVoLTJjLTAuMjc2LDAtMC41LTAuMjI0LTAuNS0wLjVzMC4yMjQtMC41LDAuNS0wLjVoMmMwLjI3NiwwLDAuNSwwLjIyNCwwLjUsMC41ICAgIFM1MC4wMDksMzQuNSw0OS43MzIsMzQuNXoiLz48L2c+PGc+PHBhdGggY2xhc3M9InN0MSIgZD0iTTUzLDEyLjVoLTRjLTAuMjc2LDAtMC41LTAuMjI0LTAuNS0wLjVzMC4yMjQtMC41LDAuNS0wLjVoNGMwLjI3NiwwLDAuNSwwLjIyNCwwLjUsMC41UzUzLjI3NiwxMi41LDUzLDEyLjV6ICAgICIvPjwvZz48Zz48cGF0aCBjbGFzcz0ic3QxIiBkPSJNMzguODQsNTQuNDdjLTAuMTczLDAtMC4zNDItMC4wOS0wLjQzNS0wLjI1MmMtMS4xMzItMS45ODItMi44MjEtMy41MTctNC43NTYtNC4zMTkgICAgQzMzLjAxMiw0OS42MzQsMzIuNDU3LDQ5LjUsMzIsNDkuNWMtMC41NjMsMC0xLjI2OSwwLjIwMi0yLjA5NiwwLjZjLTEuNzY0LDAuODQ2LTMuMjUsMi4yNjQtNC4yOTksNC4wOTkgICAgYy0wLjEzOSwwLjI0MS0wLjQ0NiwwLjMyMS0wLjY4MywwLjE4NmMtMC4yNC0wLjEzNy0wLjMyMy0wLjQ0Mi0wLjE4Ny0wLjY4MmMxLjE1LTIuMDEzLDIuNzg4LTMuNTcsNC43MzQtNC41MDQgICAgQzMwLjQzNSw0OC43MzUsMzEuMjg2LDQ4LjUsMzIsNDguNWMwLjU4OSwwLDEuMjcyLDAuMTYsMi4wMzIsMC40NzVjMi4xMzksMC44ODgsNCwyLjU3Myw1LjI0Miw0Ljc0NyAgICBjMC4xMzcsMC4yNCwwLjA1MywwLjU0NS0wLjE4NywwLjY4MkMzOS4wMSw1NC40NDksMzguOTI1LDU0LjQ3LDM4Ljg0LDU0LjQ3eiIvPjwvZz48Zz48cGF0aCBjbGFzcz0ic3QxIiBkPSJNNDUsNTQuNjY3Yy0wLjE3NywwLTAuMzQ5LTAuMDk0LTAuNDM4LTAuMjYxTDM5LjcwMyw0NS41SDI0LjI5N2wtNC43NjgsOC43MzkgICAgYy0wLjEzMSwwLjI0Mi0wLjQzNywwLjMzMi0wLjY3OCwwLjJjLTAuMjQyLTAuMTMyLTAuMzMyLTAuNDM2LTAuMTk5LTAuNjc4bDQuOTA5LTlDMjMuNjQ4LDQ0LjYsMjMuODE3LDQ0LjUsMjQsNDQuNWgxNiAgICBjMC4xODMsMCwwLjM1MiwwLjEsMC40MzgsMC4yNjFsNSw5LjE2N2MwLjEzMywwLjI0MiwwLjA0MywwLjU0Ni0wLjE5OSwwLjY3OEM0NS4xNjMsNTQuNjQ3LDQ1LjA4MSw1NC42NjcsNDUsNTQuNjY3eiIvPjwvZz48Zz48cGF0aCBjbGFzcz0ic3QxIiBkPSJNNDAsNDUuNUgyNGMtMC4yNzYsMC0wLjUtMC4yMjQtMC41LTAuNXYtM2MwLTAuMjc2LDAuMjI0LTAuNSwwLjUtMC41aDE2YzAuMjc2LDAsMC41LDAuMjI0LDAuNSwwLjV2MyAgICBDNDAuNSw0NS4yNzYsNDAuMjc2LDQ1LjUsNDAsNDUuNXogTTI0LjUsNDQuNWgxNXYtMmgtMTVWNDQuNXoiLz48L2c+PGc+PHBhdGggY2xhc3M9InN0MSIgZD0iTTQxLDQyLjVIMjNjLTAuMjc2LDAtMC41LTAuMjI0LTAuNS0wLjVzMC4yMjQtMC41LDAuNS0wLjVoMThjMC4yNzYsMCwwLjUsMC4yMjQsMC41LDAuNVM0MS4yNzYsNDIuNSw0MSw0Mi41ICAgIHoiLz48L2c+PGc+PHBhdGggY2xhc3M9InN0MSIgZD0iTTM2Ljc5OSwzMi41aC05LjU5OGMtMC4xNTgsMC0wLjMwOC0wLjA3NS0wLjQwMS0wLjIwMmMtMC4wOTUtMC4xMjctMC4xMjMtMC4yOTItMC4wNzctMC40NDMgICAgYzAuMzIxLTEuMDU0LDAuNTg2LTIuMDUxLDAuNzg5LTIuOTYzQzI3LjU2MywyOC42NjMsMjcuNzY2LDI4LjUsMjgsMjguNWg4YzAuMjM0LDAsMC40MzgsMC4xNjMsMC40ODgsMC4zOTIgICAgYzAuMjAzLDAuOTEyLDAuNDY4LDEuOTA5LDAuNzg5LDIuOTYzYzAuMDQ2LDAuMTUxLDAuMDE4LDAuMzE2LTAuMDc3LDAuNDQzQzM3LjEwNiwzMi40MjUsMzYuOTU3LDMyLjUsMzYuNzk5LDMyLjV6IE0yNy44NzEsMzEuNSAgICBoOC4yNThjLTAuMjAyLTAuNjk3LTAuMzc4LTEuMzY2LTAuNTI3LTJoLTcuMjAzQzI4LjI0OSwzMC4xMzQsMjguMDczLDMwLjgwMywyNy44NzEsMzEuNXoiLz48L2c+PGc+PHBhdGggY2xhc3M9InN0MSIgZD0iTTM1LDE2LjVoLTZjLTAuMjc2LDAtMC41LTAuMjI0LTAuNS0wLjV2LTJjMC0wLjI3NiwwLjIyNC0wLjUsMC41LTAuNWg2YzAuMjc2LDAsMC41LDAuMjI0LDAuNSwwLjV2MiAgICBDMzUuNSwxNi4yNzYsMzUuMjc2LDE2LjUsMzUsMTYuNXogTTI5LjUsMTUuNWg1di0xaC01VjE1LjV6Ii8+PC9nPjxnPjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0zNCwxNC41aC00Yy0wLjE3MywwLTAuMzM0LTAuMDktMC40MjYtMC4yMzdjLTAuMDkxLTAuMTQ3LTAuMDk5LTAuMzMyLTAuMDIxLTAuNDg2bDItNCAgICBjMC4xNy0wLjMzOSwwLjcyNS0wLjMzOSwwLjg5NSwwbDIsNGMwLjA3NywwLjE1NSwwLjA2OSwwLjMzOS0wLjAyMSwwLjQ4NkMzNC4zMzQsMTQuNDEsMzQuMTczLDE0LjUsMzQsMTQuNXogTTMwLjgwOSwxMy41aDIuMzgzICAgIEwzMiwxMS4xMThMMzAuODA5LDEzLjV6Ii8+PC9nPjxnPjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0zMiwxMC41Yy0wLjI3NiwwLTAuNS0wLjIyNC0wLjUtMC41VjhjMC0wLjI3NiwwLjIyNC0wLjUsMC41LTAuNXMwLjUsMC4yMjQsMC41LDAuNXYyICAgIEMzMi41LDEwLjI3NiwzMi4yNzYsMTAuNSwzMiwxMC41eiIvPjwvZz48Zz48cGF0aCBjbGFzcz0ic3QxIiBkPSJNMzgsMzIuNUgyNmMtMC4yNzYsMC0wLjUtMC4yMjQtMC41LTAuNXMwLjIyNC0wLjUsMC41LTAuNWgxMmMwLjI3NiwwLDAuNSwwLjIyNCwwLjUsMC41UzM4LjI3NiwzMi41LDM4LDMyLjUgICAgeiIvPjwvZz48Zz48cGF0aCBjbGFzcz0ic3QxIiBkPSJNMzcsMjkuNUgyN2MtMC4yNzYsMC0wLjUtMC4yMjQtMC41LTAuNXMwLjIyNC0wLjUsMC41LTAuNWgxMGMwLjI3NiwwLDAuNSwwLjIyNCwwLjUsMC41UzM3LjI3NiwyOS41LDM3LDI5LjUgICAgeiIvPjwvZz48Zz48cGF0aCBjbGFzcz0ic3QxIiBkPSJNMzIsMjkuNWMtMC4yNzYsMC0wLjUtMC4yMjQtMC41LTAuNVYxNmMwLTAuMjc2LDAuMjI0LTAuNSwwLjUtMC41czAuNSwwLjIyNCwwLjUsMC41djEzICAgIEMzMi41LDI5LjI3NiwzMi4yNzYsMjkuNSwzMiwyOS41eiIvPjwvZz48Zz48cGF0aCBjbGFzcz0ic3QxIiBkPSJNMzAsMzAuNWMtMC4yNzYsMC0wLjUtMC4yMjQtMC41LTAuNXYtMWMwLTAuMjc2LDAuMjI0LTAuNSwwLjUtMC41czAuNSwwLjIyNCwwLjUsMC41djEgICAgQzMwLjUsMzAuMjc2LDMwLjI3NiwzMC41LDMwLDMwLjV6Ii8+PC9nPjxnPjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0zMiwzMC41Yy0wLjI3NiwwLTAuNS0wLjIyNC0wLjUtMC41di0xYzAtMC4yNzYsMC4yMjQtMC41LDAuNS0wLjVzMC41LDAuMjI0LDAuNSwwLjV2MSAgICBDMzIuNSwzMC4yNzYsMzIuMjc2LDMwLjUsMzIsMzAuNXoiLz48L2c+PGc+PHBhdGggY2xhc3M9InN0MSIgZD0iTTM0LDMwLjVjLTAuMjc2LDAtMC41LTAuMjI0LTAuNS0wLjV2LTFjMC0wLjI3NiwwLjIyNC0wLjUsMC41LTAuNXMwLjUsMC4yMjQsMC41LDAuNXYxICAgIEMzNC41LDMwLjI3NiwzNC4yNzYsMzAuNSwzNCwzMC41eiIvPjwvZz48Zz48cGF0aCBjbGFzcz0ic3QxIiBkPSJNMzksNDIuNWgtNGMtMC4yMzgsMC0wLjQ0My0wLjE2OC0wLjQ5LTAuNDAybC0yLTEwYy0wLjAyOS0wLjE0NywwLjAwOS0wLjI5OSwwLjEwNC0wLjQxNSAgICBTMzIuODUxLDMxLjUsMzMsMzEuNWgzLjc0NWMwLjIzOCwwLDAuNDQzLDAuMTY4LDAuNDksMC40MDFjMS4wMDIsNC45NywyLjIzNyw5LjkyOCwyLjI1LDkuOTc4ICAgIGMwLjAzNywwLjE0OSwwLjAwNCwwLjMwOC0wLjA5MSwwLjQyOUMzOS4zLDQyLjQyOSwzOS4xNTQsNDIuNSwzOSw0Mi41eiBNMzUuNDEsNDEuNWgyLjk1MmMtMC4zNTItMS40NDEtMS4yNDYtNS4xNzgtMi4wMjYtOSAgICBIMzMuNjFMMzUuNDEsNDEuNXoiLz48L2c+PGc+PHBhdGggY2xhc3M9InN0MSIgZD0iTTI5LDQyLjVoLTRjLTAuMTU0LDAtMC4yOTktMC4wNzEtMC4zOTUtMC4xOTJjLTAuMDk1LTAuMTIxLTAuMTI4LTAuMjc5LTAuMDkxLTAuNDI5ICAgIGMwLjAxMy0wLjA1LDEuMjQ4LTUuMDA5LDIuMjUtOS45NzhjMC4wNDctMC4yMzMsMC4yNTItMC40MDEsMC40OS0wLjQwMUgzMWMwLjE0OSwwLDAuMjkyLDAuMDY3LDAuMzg3LDAuMTgzICAgIHMwLjEzMywwLjI2OCwwLjEwNCwwLjQxNWwtMiwxMEMyOS40NDMsNDIuMzMyLDI5LjIzOCw0Mi41LDI5LDQyLjV6IE0yNS42MzgsNDEuNWgyLjk1MmwxLjgtOWgtMi43MjYgICAgQzI2Ljg4NCwzNi4zMjIsMjUuOTg5LDQwLjA1OSwyNS42MzgsNDEuNXoiLz48L2c+PGc+PHBhdGggY2xhc3M9InN0MSIgZD0iTTMwLjIsMzYuNWgtMy44MDZjLTAuMjc2LDAtMC41LTAuMjI0LTAuNS0wLjVzMC4yMjQtMC41LDAuNS0wLjVIMzAuMmMwLjI3NiwwLDAuNSwwLjIyNCwwLjUsMC41ICAgIFMzMC40NzcsMzYuNSwzMC4yLDM2LjV6Ii8+PC9nPjxnPjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0yNSw0Mi41Yy0wLjExNiwwLTAuMjMyLTAuMDQtMC4zMjctMC4xMjJjLTAuMjA5LTAuMTgxLTAuMjMxLTAuNDk3LTAuMDUxLTAuNzA2bDQuOTM3LTUuNjk1TDI2LjgwMSwzMi4zICAgIGMtMC4xNjUtMC4yMjEtMC4xMi0wLjUzNCwwLjEwMS0wLjdjMC4yMi0wLjE2NSwwLjUzMy0wLjEyMiwwLjcsMC4xbDIuOTk5LDRjMC4xNDEsMC4xODgsMC4xMzIsMC40NDktMC4wMjIsMC42MjdsLTUuMiw2ICAgIEMyNS4yNzksNDIuNDQxLDI1LjE0LDQyLjUsMjUsNDIuNXoiLz48L2c+PGc+PHBhdGggY2xhc3M9InN0MSIgZD0iTTM3LjYwNSwzNi41SDMzLjhjLTAuMjc2LDAtMC41LTAuMjI0LTAuNS0wLjVzMC4yMjQtMC41LDAuNS0wLjVoMy44MDZjMC4yNzYsMCwwLjUsMC4yMjQsMC41LDAuNSAgICBTMzcuODgyLDM2LjUsMzcuNjA1LDM2LjV6Ii8+PC9nPjxnPjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0zOSw0Mi41Yy0wLjE0LDAtMC4yNzktMC4wNTktMC4zNzgtMC4xNzJsLTUuMi02Yy0wLjE1NC0wLjE3OC0wLjE2My0wLjQzOS0wLjAyMi0wLjYyN2wyLjk5OS00ICAgIGMwLjE2Ny0wLjIyMSwwLjQ4LTAuMjY1LDAuNy0wLjFjMC4yMjEsMC4xNjYsMC4yNjYsMC40NzksMC4xMDEsMC43bC0yLjc1OCwzLjY3N2w0LjkzNyw1LjY5NSAgICBjMC4xODEsMC4yMDksMC4xNTgsMC41MjQtMC4wNTEsMC43MDZDMzkuMjMyLDQyLjQ2LDM5LjExNiw0Mi41LDM5LDQyLjV6Ii8+PC9nPjxnPjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0zNiwyOS41aC04Yy0wLjE2MSwwLTAuMzEyLTAuMDc3LTAuNDA1LTAuMjA4Yy0wLjA5NS0wLjEzLTAuMTItMC4yOTgtMC4wNjktMC40NTEgICAgYzAuOTcyLTIuOTEzLDEuOTY3LTEyLjc5MiwxLjk3OC0xMi44OTJjMC4wMjUtMC4yNTUsMC4yNC0wLjQ1LDAuNDk3LTAuNDVoNGMwLjI1NywwLDAuNDcyLDAuMTk1LDAuNDk3LDAuNDUgICAgYzAuMDExLDAuMSwxLjAwNiw5Ljk3OSwxLjk3OCwxMi44OTJjMC4wNTEsMC4xNTIsMC4wMjUsMC4zMi0wLjA2OSwwLjQ1MUMzNi4zMTIsMjkuNDIzLDM2LjE2MSwyOS41LDM2LDI5LjV6IE0yOC42NjcsMjguNWg2LjY2NiAgICBjLTAuODI1LTMuMTQ0LTEuNTktMTAuMTM3LTEuNzg0LTEyaC0zLjA5OEMzMC4yNTcsMTguMzYzLDI5LjQ5MiwyNS4zNTYsMjguNjY3LDI4LjV6Ii8+PC9nPjxnPjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0zMiwxOC41Yy0wLjA1NCwwLTAuMTA2LTAuMDA5LTAuMTU4LTAuMDI2bC0yLjEzNy0wLjcxMWMtMC4yNjItMC4wODctMC40MDMtMC4zNzEtMC4zMTYtMC42MzMgICAgYzAuMDg5LTAuMjYyLDAuMzcyLTAuNDAyLDAuNjMzLTAuMzE2TDMyLDE3LjQ3M2wxLjk3OS0wLjY1OWMwLjI2My0wLjA4NywwLjU0NSwwLjA1NCwwLjYzMywwLjMxNiAgICBjMC4wODcsMC4yNjItMC4wNTUsMC41NDUtMC4zMTYsMC42MzNsLTIuMTM3LDAuNzExQzMyLjEwNiwxOC40OTEsMzIuMDU0LDE4LjUsMzIsMTguNXoiLz48L2c+PGc+PHBhdGggY2xhc3M9InN0MSIgZD0iTTM0LjQyOCwyMC4zMDljLTAuMDUzLDAtMC4xMDUtMC4wMDgtMC4xNTgtMC4wMjZMMzIsMTkuNTI3bC0yLjI3LDAuNzU2ICAgIGMtMC4yNjEsMC4wODgtMC41NDQtMC4wNTMtMC42MzMtMC4zMTZjLTAuMDg3LTAuMjYyLDAuMDU1LTAuNTQ1LDAuMzE2LTAuNjMybDIuNDI4LTAuODA5YzAuMTA0LTAuMDM0LDAuMjEzLTAuMDM0LDAuMzE2LDAgICAgbDIuNDI4LDAuODA5YzAuMjYyLDAuMDg3LDAuNDAzLDAuMzcsMC4zMTYsMC42MzJDMzQuODMyLDIwLjE3NywzNC42MzcsMjAuMzA5LDM0LjQyOCwyMC4zMDl6Ii8+PC9nPjxnPjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0zMiwyMi41Yy0wLjA1NCwwLTAuMTA2LTAuMDA5LTAuMTU4LTAuMDI2bC0yLjU5NC0wLjg2NWMtMC4yNjItMC4wODctMC40MDMtMC4zNy0wLjMxNi0wLjYzMiAgICBjMC4wODgtMC4yNjIsMC4zNzEtMC40MDEsMC42MzMtMC4zMTZMMzIsMjEuNDczbDIuNDM2LTAuODEyYzAuMjYyLTAuMDg2LDAuNTQ1LDAuMDU0LDAuNjMzLDAuMzE2ICAgIGMwLjA4NywwLjI2Mi0wLjA1NSwwLjU0NS0wLjMxNiwwLjYzMmwtMi41OTQsMC44NjVDMzIuMTA2LDIyLjQ5MSwzMi4wNTQsMjIuNSwzMiwyMi41eiIvPjwvZz48Zz48cGF0aCBjbGFzcz0ic3QxIiBkPSJNMzUsMjQuNWMtMC4wNTMsMC0wLjEwNS0wLjAwOC0wLjE1OC0wLjAyNkwzMiwyMy41MjdsLTIuODQyLDAuOTQ3Yy0wLjI2MSwwLjA4Ny0wLjU0NC0wLjA1My0wLjYzMy0wLjMxNiAgICBjLTAuMDg3LTAuMjYyLDAuMDU1LTAuNTQ1LDAuMzE2LTAuNjMybDMtMWMwLjEwNC0wLjAzNCwwLjIxMy0wLjAzNCwwLjMxNiwwbDMsMWMwLjI2MiwwLjA4NywwLjQwMywwLjM3LDAuMzE2LDAuNjMyICAgIEMzNS40MDQsMjQuMzY4LDM1LjIwOSwyNC41LDM1LDI0LjV6Ii8+PC9nPjxnPjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0zMiwyNi41Yy0wLjA1NCwwLTAuMTA2LTAuMDA5LTAuMTU4LTAuMDI2bC0zLTFjLTAuMjYyLTAuMDg3LTAuNDAzLTAuMzctMC4zMTYtMC42MzIgICAgYzAuMDg5LTAuMjYyLDAuMzczLTAuNDAxLDAuNjMzLTAuMzE2TDMyLDI1LjQ3M2wyLjg0Mi0wLjk0N2MwLjI2Mi0wLjA4NSwwLjU0NSwwLjA1NCwwLjYzMywwLjMxNiAgICBjMC4wODcsMC4yNjItMC4wNTUsMC41NDUtMC4zMTYsMC42MzJsLTMsMUMzMi4xMDYsMjYuNDkxLDMyLjA1NCwyNi41LDMyLDI2LjV6Ii8+PC9nPjxnPjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0zNiwyOS41Yy0wLjA3NSwwLTAuMTUxLTAuMDE3LTAuMjI0LTAuMDUzTDMyLDI3LjU1OWwtMy43NzYsMS44ODhjLTAuMjQ4LDAuMTIzLTAuNTQ3LDAuMDI0LTAuNjcxLTAuMjI0ICAgIGMtMC4xMjMtMC4yNDctMC4wMjMtMC41NDcsMC4yMjQtMC42NzFsNC0yYzAuMTQxLTAuMDcsMC4zMDctMC4wNywwLjQ0NywwbDQsMmMwLjI0NywwLjEyNCwwLjM0NywwLjQyNCwwLjIyNCwwLjY3MSAgICBDMzYuMzU5LDI5LjM5OSwzNi4xODMsMjkuNSwzNiwyOS41eiIvPjwvZz48Zz48cGF0aCBjbGFzcz0ic3QxIiBkPSJNNDIuMTgyLDQ5LjVIMjEuODE4Yy0wLjE3NywwLTAuMzQtMC4wOTMtMC40My0wLjI0NWMtMC4wOTEtMC4xNTItMC4wOTQtMC4zNC0wLjAwOS0wLjQ5NWwyLjE4Mi00ICAgIEMyMy42NDgsNDQuNiwyMy44MTcsNDQuNSwyNCw0NC41aDE2YzAuMTgzLDAsMC4zNTIsMC4xLDAuNDM4LDAuMjYxbDIuMTgyLDRjMC4wODUsMC4xNTUsMC4wODIsMC4zNDMtMC4wMDksMC40OTUgICAgQzQyLjUyMSw0OS40MDcsNDIuMzU4LDQ5LjUsNDIuMTgyLDQ5LjV6IE0yMi42Niw0OC41aDE4LjY4bC0xLjYzNy0zSDI0LjI5N0wyMi42Niw0OC41eiIvPjwvZz48Zz48cGF0aCBjbGFzcz0ic3QxIiBkPSJNMjYsNDMuNWMtMC4yNzYsMC0wLjUtMC4yMjQtMC41LTAuNXYtMWMwLTAuMjc2LDAuMjI0LTAuNSwwLjUtMC41czAuNSwwLjIyNCwwLjUsMC41djEgICAgQzI2LjUsNDMuMjc2LDI2LjI3Niw0My41LDI2LDQzLjV6Ii8+PC9nPjxnPjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0yOCw0My41Yy0wLjI3NiwwLTAuNS0wLjIyNC0wLjUtMC41di0xYzAtMC4yNzYsMC4yMjQtMC41LDAuNS0wLjVzMC41LDAuMjI0LDAuNSwwLjV2MSAgICBDMjguNSw0My4yNzYsMjguMjc2LDQzLjUsMjgsNDMuNXoiLz48L2c+PGc+PHBhdGggY2xhc3M9InN0MSIgZD0iTTMwLDQzLjVjLTAuMjc2LDAtMC41LTAuMjI0LTAuNS0wLjV2LTFjMC0wLjI3NiwwLjIyNC0wLjUsMC41LTAuNXMwLjUsMC4yMjQsMC41LDAuNXYxICAgIEMzMC41LDQzLjI3NiwzMC4yNzYsNDMuNSwzMCw0My41eiIvPjwvZz48Zz48cGF0aCBjbGFzcz0ic3QxIiBkPSJNMzIsNDMuNWMtMC4yNzYsMC0wLjUtMC4yMjQtMC41LTAuNXYtMWMwLTAuMjc2LDAuMjI0LTAuNSwwLjUtMC41czAuNSwwLjIyNCwwLjUsMC41djEgICAgQzMyLjUsNDMuMjc2LDMyLjI3Niw0My41LDMyLDQzLjV6Ii8+PC9nPjxnPjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0zNCw0My41Yy0wLjI3NiwwLTAuNS0wLjIyNC0wLjUtMC41di0xYzAtMC4yNzYsMC4yMjQtMC41LDAuNS0wLjVzMC41LDAuMjI0LDAuNSwwLjV2MSAgICBDMzQuNSw0My4yNzYsMzQuMjc2LDQzLjUsMzQsNDMuNXoiLz48L2c+PGc+PHBhdGggY2xhc3M9InN0MSIgZD0iTTM2LDQzLjVjLTAuMjc2LDAtMC41LTAuMjI0LTAuNS0wLjV2LTFjMC0wLjI3NiwwLjIyNC0wLjUsMC41LTAuNXMwLjUsMC4yMjQsMC41LDAuNXYxICAgIEMzNi41LDQzLjI3NiwzNi4yNzYsNDMuNSwzNiw0My41eiIvPjwvZz48Zz48cGF0aCBjbGFzcz0ic3QxIiBkPSJNMzgsNDMuNWMtMC4yNzYsMC0wLjUtMC4yMjQtMC41LTAuNXYtMWMwLTAuMjc2LDAuMjI0LTAuNSwwLjUtMC41czAuNSwwLjIyNCwwLjUsMC41djEgICAgQzM4LjUsNDMuMjc2LDM4LjI3Niw0My41LDM4LDQzLjV6Ii8+PC9nPjxnPjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0yNSw0Ny41Yy0wLjI3NiwwLTAuNS0wLjIyNC0wLjUtMC41di0yYzAtMC4yNzYsMC4yMjQtMC41LDAuNS0wLjVzMC41LDAuMjI0LDAuNSwwLjV2MiAgICBDMjUuNSw0Ny4yNzYsMjUuMjc2LDQ3LjUsMjUsNDcuNXoiLz48L2c+PGc+PHBhdGggY2xhc3M9InN0MSIgZD0iTTI3LDQ3LjVjLTAuMjc2LDAtMC41LTAuMjI0LTAuNS0wLjV2LTJjMC0wLjI3NiwwLjIyNC0wLjUsMC41LTAuNXMwLjUsMC4yMjQsMC41LDAuNXYyICAgIEMyNy41LDQ3LjI3NiwyNy4yNzYsNDcuNSwyNyw0Ny41eiIvPjwvZz48Zz48cGF0aCBjbGFzcz0ic3QxIiBkPSJNMjksNDcuNWMtMC4yNzYsMC0wLjUtMC4yMjQtMC41LTAuNXYtMmMwLTAuMjc2LDAuMjI0LTAuNSwwLjUtMC41czAuNSwwLjIyNCwwLjUsMC41djIgICAgQzI5LjUsNDcuMjc2LDI5LjI3Niw0Ny41LDI5LDQ3LjV6Ii8+PC9nPjxnPjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0zMSw0Ny41Yy0wLjI3NiwwLTAuNS0wLjIyNC0wLjUtMC41di0yYzAtMC4yNzYsMC4yMjQtMC41LDAuNS0wLjVzMC41LDAuMjI0LDAuNSwwLjV2MiAgICBDMzEuNSw0Ny4yNzYsMzEuMjc2LDQ3LjUsMzEsNDcuNXoiLz48L2c+PGc+PHBhdGggY2xhc3M9InN0MSIgZD0iTTMzLDQ3LjVjLTAuMjc2LDAtMC41LTAuMjI0LTAuNS0wLjV2LTJjMC0wLjI3NiwwLjIyNC0wLjUsMC41LTAuNXMwLjUsMC4yMjQsMC41LDAuNXYyICAgIEMzMy41LDQ3LjI3NiwzMy4yNzYsNDcuNSwzMyw0Ny41eiIvPjwvZz48Zz48cGF0aCBjbGFzcz0ic3QxIiBkPSJNMzUsNDcuNWMtMC4yNzYsMC0wLjUtMC4yMjQtMC41LTAuNXYtMmMwLTAuMjc2LDAuMjI0LTAuNSwwLjUtMC41czAuNSwwLjIyNCwwLjUsMC41djIgICAgQzM1LjUsNDcuMjc2LDM1LjI3Niw0Ny41LDM1LDQ3LjV6Ii8+PC9nPjxnPjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0zNyw0Ny41Yy0wLjI3NiwwLTAuNS0wLjIyNC0wLjUtMC41di0yYzAtMC4yNzYsMC4yMjQtMC41LDAuNS0wLjVzMC41LDAuMjI0LDAuNSwwLjV2MiAgICBDMzcuNSw0Ny4yNzYsMzcuMjc2LDQ3LjUsMzcsNDcuNXoiLz48L2c+PGc+PHBhdGggY2xhc3M9InN0MSIgZD0iTTM5LDQ3LjVjLTAuMjc2LDAtMC41LTAuMjI0LTAuNS0wLjV2LTJjMC0wLjI3NiwwLjIyNC0wLjUsMC41LTAuNXMwLjUsMC4yMjQsMC41LDAuNXYyICAgIEMzOS41LDQ3LjI3NiwzOS4yNzYsNDcuNSwzOSw0Ny41eiIvPjwvZz48Zz48cGF0aCBjbGFzcz0ic3QxIiBkPSJNMjMuMTc5LDU0LjVjLTAuMiwwLTAuMzktMC4xMjItMC40NjctMC4zMmMtMC4wOTktMC4yNTgsMC4wMjktMC41NDcsMC4yODctMC42NDZsMS44OTEtMC43M2wtMy40MzQtMy40NDIgICAgYy0wLjE5NS0wLjE5NS0wLjE5NS0wLjUxMiwwLTAuNzA3YzAuMTk1LTAuMTk0LDAuNTEyLTAuMTk1LDAuNzA3LDAuMDAxbDMuOTc2LDMuOTg1YzAuMTIsMC4xMiwwLjE3MSwwLjI5MiwwLjEzNiwwLjQ1NyAgICBjLTAuMDM1LDAuMTY2LTAuMTUxLDAuMzAyLTAuMzEsMC4zNjNsLTIuNjA2LDEuMDA3QzIzLjMsNTQuNDg5LDIzLjIzOCw1NC41LDIzLjE3OSw1NC41eiIvPjwvZz48Zz48cGF0aCBjbGFzcz0ic3QxIiBkPSJNMjEuMSw1NC41Yy0wLjA5OSwwLTAuMTk3LTAuMDI5LTAuMjg0LTAuMDg4bC0xLjQ2LTEuMDA3Yy0wLjE0My0wLjA5OS0wLjIyNS0wLjI2NS0wLjIxNS0wLjQzOCAgICBjMC4wMDktMC4xNzQsMC4xMDgtMC4zMywwLjI2MS0wLjQxM2w3LjM2LTMuOTg0YzAuMjQzLTAuMTMxLDAuNTQ3LTAuMDQyLDAuNjc4LDAuMjAxYzAuMTMyLDAuMjQzLDAuMDQxLDAuNTQ2LTAuMjAxLDAuNjc4ICAgIGwtNi42NDQsMy41OTdsMC43ODksMC41NDRjMC4yMjcsMC4xNTcsMC4yODQsMC40NjgsMC4xMjcsMC42OTVDMjEuNDE0LDU0LjQyNCwyMS4yNTgsNTQuNSwyMS4xLDU0LjV6Ii8+PC9nPjxnPjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik00MC44MjEsNTQuNWMtMC4wNiwwLTAuMTIxLTAuMDExLTAuMTgtMC4wMzRsLTIuNjA2LTEuMDA3Yy0wLjE1OC0wLjA2MS0wLjI3NC0wLjE5Ny0wLjMxLTAuMzYzICAgIGMtMC4wMzUtMC4xNjUsMC4wMTYtMC4zMzcsMC4xMzYtMC40NTdsMy45NzYtMy45ODVjMC4xOTUtMC4xOTYsMC41MTItMC4xOTUsMC43MDctMC4wMDFjMC4xOTUsMC4xOTUsMC4xOTUsMC41MTIsMCwwLjcwNyAgICBsLTMuNDM0LDMuNDQybDEuODkxLDAuNzNjMC4yNTgsMC4xLDAuMzg2LDAuMzg5LDAuMjg3LDAuNjQ2QzQxLjIxMSw1NC4zNzgsNDEuMDIxLDU0LjUsNDAuODIxLDU0LjV6Ii8+PC9nPjxnPjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik00Myw1NC40MzFjLTAuMTU4LDAtMC4zMTQtMC4wNzYtMC40MTItMC4yMTZjLTAuMTU2LTAuMjI3LTAuMDk5LTAuNTM5LDAuMTI4LTAuNjk1bDAuNjg5LTAuNDc1bC02LjY0NC0zLjU5NyAgICBjLTAuMjQyLTAuMTMxLTAuMzMzLTAuNDM1LTAuMjAxLTAuNjc4YzAuMTMxLTAuMjQ0LDAuNDM1LTAuMzMyLDAuNjc4LTAuMjAxbDcuMzYsMy45ODRjMC4xNTIsMC4wODMsMC4yNTIsMC4yMzksMC4yNjEsMC40MTMgICAgYzAuMDEsMC4xNzQtMC4wNzIsMC4zNC0wLjIxNSwwLjQzOGwtMS4zNiwwLjkzOEM0My4xOTcsNTQuNDAyLDQzLjA5OSw1NC40MzEsNDMsNTQuNDMxeiIvPjwvZz48Zz48cGF0aCBjbGFzcz0ic3QxIiBkPSJNMjMsMjcuNWgtM2MtMC4yNzYsMC0wLjUtMC4yMjQtMC41LTAuNXYtMWMwLTEuMzc4LTEuMTIxLTIuNS0yLjUtMi41cy0yLjUsMS4xMjItMi41LDIuNXYxICAgIGMwLDAuMjc2LTAuMjI0LDAuNS0wLjUsMC41cy0wLjUtMC4yMjQtMC41LTAuNXYtMC41YzAtMC41NTEtMC40NDgtMS0xLTFzLTEsMC40NDktMSwxVjI3YzAsMC4yNzYtMC4yMjQsMC41LTAuNSwwLjVIOCAgICBjLTAuMjc2LDAtMC41LTAuMjI0LTAuNS0wLjVzMC4yMjQtMC41LDAuNS0wLjVoMi41YzAtMS4xMDMsMC44OTctMiwyLTJjMC40NDEsMCwwLjg1MSwwLjE0NCwxLjE4MiwwLjM4NyAgICBDMTQuMTQ3LDIzLjUwMSwxNS40NTksMjIuNSwxNywyMi41YzEuOTMsMCwzLjUsMS41NywzLjUsMy41djAuNUgyM2MwLjI3NiwwLDAuNSwwLjIyNCwwLjUsMC41UzIzLjI3NiwyNy41LDIzLDI3LjV6Ii8+PC9nPjwvZz48L3N2Zz4=',
    iconSize: [64, 64],
    iconAnchor: [32, 60],
    popupAnchor: [-10, -90]
})

class MainMap extends Component {

    constructor() {
        super();

        this.state = {
            location: {
                lat: 40.7331,
                lng: -73.9902
            },
            userLocation: {
                lat: '',
                lng: ''
            },
            haveUserLocation: false,
            zoom: 1,
            city: ""

        }
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition((position) => {
            this.setState({
                userLocation: {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                },
                haveUsersLocation: true,
                zoom: 3
            })
        })

        console.log(this.state.location);
    }

    onClickVisualization = () => {
        const path = '/visual';
        this.props.history.push(path);
    }

    onSceneViewNY = () => {
        const path = '/newyork';
        this.props.history.push(path);
    }

    onSceneViewParis = () => {
        const path = '/paris';
        this.props.history.push(path);
    }

    onSceneViewGeneva = () => {
        const path = '/geneva';
        this.props.history.push(path);
    }

    onSceneViewLucerne = () => {
        const path = '/lucerne';
        this.props.history.push(path);
    }

    onSceneViewLyon = () => {
        const path = '/lyon';
        this.props.history.push(path);
    }

    render() {

        const position = [this.state.location.lat, this.state.location.lng]
        const userPosition = [this.state.userLocation.lat, this.state.userLocation.lng]
        const parisLatLng = [48.8566, 2.3522]

        const genevaLatLng = [46.2044, 6.1432]
        const lucerneLatLng = [47.0502, 8.3093]
        const lyonLatLng = [45.7640, 4.8357]

        return (
            <div className="App">
                <Navbar color="light" light expand="md">
                    <NavbarBrand className="navbar-brand mx-auto" href="/">City Visualization</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/components/">Components</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Options
                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        Option 1
                  </DropdownItem>
                                    <DropdownItem>
                                        Option 2
                  </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        Reset
                  </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
                <Map className='map' center={position} zoom={this.state.zoom}>
                    <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {(this.state.haveUserLocation) ?
                        <Marker icon={myIcon} position={userPosition}>
                            <Popup onClick={this.clickPopup}>Current Position</Popup>
                        </Marker> : ''
                    }

                    {/* New York */}
                    <Marker icon={myIcon} position={position} onClick={this.onSceneViewNY}>
                        <Popup onClick={this.clickPopup}>Manhattan, New York!</Popup>
                    </Marker>
                    <Circle center={position} fillColor="blue" radius={3500} onClick={this.onClickMarker}>
                        <Popup center={position}>
                            Click to see a <br /> 3D visualization of Manhattan
                        </Popup>
                    </Circle>

                    {/* Paris */}
                    <Marker icon={parisIcon} position={parisLatLng} onClick={this.onSceneViewParis}>
                        <Popup onClick={this.clickPopup}>Paris, France</Popup>
                    </Marker>
                    <Circle center={parisLatLng} fillColor="blue" radius={3500} onClick={this.onClickMarker}>
                        <Popup center={position}>
                            Click to see a <br /> 3D visualization of Paris
                        </Popup>
                    </Circle>

                    {/* Lucerne */}
                    <Marker icon={myIcon} position={lucerneLatLng} onClick={this.onSceneViewLucerne}>
                        <Popup onClick={this.clickPopup}>Lucerne, Switzerland</Popup>
                    </Marker>
                    <Circle center={lucerneLatLng} fillColor="blue" radius={3500} onClick={this.onClickMarker}>
                        <Popup center={position}>
                            Click to see a <br /> 3D visualization of Lucerne
                        </Popup>
                    </Circle>

                    {/* Geneva */}
                    <Marker icon={myIcon} position={genevaLatLng} onClick={this.onSceneViewGeneva}>
                        <Popup onClick={this.clickPopup}>Geneva, Switzerland</Popup>
                    </Marker>
                    <Circle center={genevaLatLng} fillColor="blue" radius={3500} onClick={this.onClickMarker}>
                        <Popup center={position}>
                            Click to see a <br /> 3D visualization of Geneva
                        </Popup>
                    </Circle>

                    <Marker icon={myIcon} position={lyonLatLng} onClick={this.onSceneViewLyon}>
                        <Popup onClick={this.clickPopup}>Lyon, France</Popup>
                    </Marker>
                    <Circle center={lyonLatLng} fillColor="blue" radius={3500} onClick={this.onClickMarker}>
                        <Popup center={position}>
                            Click to see a <br /> 3D visualization of Lyon
                        </Popup>
                    </Circle>


                </Map>
            </div>



        )
    }
}

export default MainMap;