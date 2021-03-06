<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" 
    xmlns:html="http://www.w3.org/TR/REC-html40"
    xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:video="http://www.google.com/schemas/sitemap-video/1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
	
<xsl:template match="/">
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<title>Video Sitemap</title>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
		<style type="text/css">
			body {
				background: #fff;
				margin: 0;
				padding: 0; }
			
			body, td, th {
				font: 11px "Lucida Grande", "Lucida Sans Unicode", Tahoma, Verdana, sans-serif; }
			
			#wrap {
				width: 100%;
				background: #fff;
				clear: both;
				margin: 15px 30px;
				padding: 0;
				max-width: 980px; }
			
			h1 {
				border-bottom-width: 1px;
				border-bottom-style: solid;
				border-bottom-color: #dadada;
				color: #666;
				clear: both;
				font: 24px Georgia, "Times New Roman", Times, serif;
				margin: 5px 0 0;
				padding: 0;
				padding-bottom: 7px;
				padding-right: 280px; }
			
			#about {
				margin: 20px; }
		
			#footer	{
				background: #464646;
				color: #999;
				clear: both;
				height: 65px;
				padding: 10px 0 0;
				text-align: center;
				margin: 30px 0 0;
				font-size: 12px; }
				
			#footer a {
				color: #fff; }
				
			#footer a:hover {
				text-decoration: underline; }
			
			table {
				border-color: #ccc;
				border-width: 1px;
				border-style: solid;
				border-collapse: collapse;
				width: 100%;
				clear: both;
				margin: 0; }
			
			thead {
				background-color: #464646;
				color: #d7d7d7; }
			
			td {
				border-bottom-width: 1px;
				border-bottom-style: solid;
				border-bottom-color: #ccc;
				padding: 7px 15px 9px 10px;
				line-height: 20px;
				color: #444; }
			
			th {
				font-weight: bold;
				border-bottom-color: #ccc;
				text-align: left;
				line-height: 25px;
				padding: 6px; }
			
			tr.odd {
				background-color: #f9f9f9; }
			
			img {
				padding: 2px;
				border: 1px solid #bbb; }
			
			a {
				color: #2583ad;
				text-decoration: none; }

			a:hover {
				color: #d54e21; }
		</style>
	</head>
	<body>
		<div id="wrap">
			<h1>Video Sitemap</h1>
			<div id="about">
				<p>Generated by <a href="http://www.channel-ai.com/blog/plugins/flv-embed/" title="FLV Embed Plugin for WordPress">FLV Embed Plugin</a> for <a href="http://wordpress.org/">WordPress</a></p>
				<p>More information about video sitemap can be found on <a href="http://www.google.com/support/webmasters/bin/topic.py?topic=10079">Google</a></p>
			</div>
			
			<div id="content">
				<table>
				<thead>
					<tr>
						<th>Video</th>
						<th>Landing Page</th>
						<th>Description</th>
					</tr>
				</thead>
				<tbody>
					<xsl:for-each select="sitemap:urlset/sitemap:url">
						<tr>
							<xsl:if test="position() mod 2 = 1">
								<xsl:attribute name="class">odd</xsl:attribute>
							</xsl:if>

							<td>
								<xsl:variable name="thumbURL">
									<xsl:value-of select="video:video/video:thumbnail_loc"/>
								</xsl:variable>
								
								<xsl:variable name="flvURL">
									<xsl:value-of select="video:video/video:player_loc"/>
								</xsl:variable>
								
								<a href="{$flvURL}"><img src="{$thumbURL}" width="120" height="90" /></a>
							</td>
							
							<td>
								<xsl:variable name="itemURL">
									<xsl:value-of select="sitemap:loc"/>
								</xsl:variable>
								<a href="{$itemURL}">
									<xsl:value-of select="video:video/video:title"/>
								</a>
							</td>

							<td>
								<xsl:variable name="desc">
									<xsl:value-of select="video:video/video:description"/>
								</xsl:variable>      
								<xsl:choose>
									<xsl:when test="string-length($desc) &lt; 200">
										<xsl:value-of select="$desc"/>
									</xsl:when>
									<xsl:otherwise>
										<xsl:value-of select="concat(substring($desc,1,200),' ...')"/>
									</xsl:otherwise>
								</xsl:choose>
							</td>
						</tr>
					</xsl:for-each>
					</tbody>
				</table>
			</div>
		
		</div>
		<div id="footer">
			<p>Powered by <a href="http://www.channel-ai.com/blog/plugins/flv-embed/" title="FLV Embed Plugin for WordPress">FLV Embed Plugin for WordPress</a></p>
		</div>

	</body>
</html>
</xsl:template>

</xsl:stylesheet>
