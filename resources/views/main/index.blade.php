@extends('mainLayout')

@section('content')
<div class="chart-body" id="chartPanel">
    
</div>
@endsection
<script type="text/javascript" src="{{asset('js/chart/js/socket.io.js')}}"></script>
<script type="text/javascript" src="{{asset('js/chart/charting_library/charting_library.standalone.js')}}"></script>
<script type="text/javascript" src="{{asset('js/chart/datafeeds/udf/datafeed.js')}}"></script>
<script type="text/javascript" src="{{asset('js/chart/js/script.js?v=1.2')}}"></script>
<script type="text/javascript" src="{{asset('js/chart/js/master.js')}}"></script>