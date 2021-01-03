<?php

class ContactsController extends \BaseController {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		// return Response::make('Sorry, something went wrong', 403);
		return Contact::all();
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store()
	{
		return Contact::create(Input::all());
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		return Contact::find($id);
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
		$c = Contact::find($id);
		$c->name = Input::get('name');
		$c->phone = Input::get('phone');
		$c->address = Input::get('address');
		$c->email = Input::get('email');
		$c->website = Input::get('website');
		$c->notes = Input::get('notes');
		$c->save();
		return $c;
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		Contact::destroy($id);
		return 'Destroyed';
	}

}