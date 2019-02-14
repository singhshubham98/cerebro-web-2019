import React, { Component } from 'react';

import image from '../img/college.jpg';
import trash from '../img/trash.svg';

import FontAwesome from 'react-fontawesome'

class MyEvents extends Component {
	constructor(props) {
		super(props)
		this.state = {
			registeredEvents: [
				{id: '1', eventName: 'Cook-a-code', starts: '21 March'},
				{id: '2', eventName: 'Hackathon', starts: '21 March'},
				{id: '3', eventName: 'Hired!', starts: '21 March'},
				{id: '4', eventName: 'React', starts: '21 March'},
				{id: '5', eventName: 'Game Of Thrones', starts: '21 March'},
				{id: '6', eventName: 'Naruto', starts: '21 March'},
				{id: '7', eventName: 'Naruto Shippuden', starts: '21 March'},
				{id: '8', eventName: 'Cook-a-code', starts: '21 March'},
				{id: '9', eventName: 'Cook-a-code', starts: '21 March'},
				{id: '10', eventName: 'Cook-a-code', starts: '21 March'},
				{id: '11', eventName: 'Cook-a-code', starts: '21 March'},
			]
		}
	}

	render() {
		return (
			<div className='my-events'>
				<div className='my-events__user-profile' id='user-profile-main'>
					<div className='user-data'>
						<div style={{backgroundImage: `url(${image})`}}></div>
						<div className='user-profile-wrapper'>
							<h1>John Doe</h1>
							<p>Mobile No. : 918273912</p>
						</div>
					</div>
					<div className='user-contact'>
						<form>
							<input type='text' placeholder='Mobile'/>
							<input type='submit' value='Save' />
						</form>
					</div>
				</div>
				<div className='my-events__events-table-wrapper'>
					<div className='events-table'>
						<h1 className="section-title">Registered Events</h1>
						<table className='my-events-table'>
							<thead>
								<tr className='my-events-table-header'>
									<th className='td-no'>#</th>
									<th className='td-eventname'>Event Name</th>
									<th className='td-starts'>Starts On</th>
									<th className='td-action'>Action</th>
								</tr>
							</thead>
							<tbody>
								{(this.state.registeredEvents) ? this.state.registeredEvents.map((e, ind) => {
									return (
										<tr className='data-row' key={ind + 1}>
											<td className='td-no'>{ind + 1}</td>
											<td className='td-eventname'>{e.eventName}</td>
											<td className='td-starts'>{e.starts}</td>
											<td className='td-action'><FontAwesome name='trash' size='1x'/></td>
										</tr>
									)
								}) : null}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		)
	}
}

export default MyEvents;