var siderProperties;

		siderProperties=
			"<div class='inner'>"
					+"<nav>"
						+"<h2>参数（Properties）</h2>"
						+"<ul>"
							+"<li style=\"position:relative\" class=\"propli\">"
								+"<label class=\"proplabel\">PV Name:</label>"
								+"<input type=\"text\" placeholder=\"pv0\" class=\"propinput\" ng-model=\"pvName\" />"
							+"</li>"
							+"<li style=\"position:relative; top:2.5em\" class=\"propli\">"
								+"<label class=\"proplabel\">PV Value:</label>"
								+"<input type=\"text\" placeholder=\"测试控制圆半径功能\" class=\"propinput\" ng-model=\"pvValue\" />"
							+"</li>"
						+"</ul>"
					+"</nav>"
				+"</div>";

			$("#sideProperties").append(siderProperties);