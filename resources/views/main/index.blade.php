@extends('mainLayout')

@section('content')
<div class="chart-body d-flex ">
    <div class="algo-list" style="display:none">
        <div class="algo-list-header">
            BITCOIN
        </div>
        <div class="algo-list-body">
            <div class="algo-list-content">
            </div>
        </div>
    </div>
    <div class="chart-panel" id="chartPanel">
    </div>
</div>
@endsection
@section('script')
<script type="text/javascript" src="{{asset('js/chart/js/socket.io.js')}}"></script>
<script type="text/javascript" src="{{asset('js/chart/charting_library/charting_library.standalone.js')}}"></script>
<script type="text/javascript" src="{{asset('js/chart/datafeeds/udf/datafeed.js')}}"></script>
<script type="text/javascript" src="{{asset('js/chart/js/script.js?v=1.2')}}"></script>
<script type="text/javascript" src="{{asset('js/chart/js/master.js')}}"></script>
<script type="text/javascript" src="{{asset('js/chartpanel.js')}}"></script>
@endsection