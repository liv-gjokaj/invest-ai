{/* ================= RESTORED PRO SPY ================= */}
<div style={{ marginTop: 90 }}>
  <h2 style={{ marginBottom: 20 }}>
    SPY — S&P 500
  </h2>

  {(() => {
    const first = spyData[0]?.price || 0;
    const last = spyData[spyData.length - 1]?.price || 0;
    const change = last - first;
    const percent = first ? (change / first) * 100 : 0;
    const isUp = change >= 0;

    return (
      <>
        {/* Live Price Header */}
        <div style={{ display: "flex", gap: 15, alignItems: "baseline", marginBottom: 15 }}>
          <div style={{ fontSize: 34, fontWeight: 600 }}>
            ${last.toFixed(2)}
          </div>
          <div
            style={{
              fontSize: 18,
              fontWeight: 500,
              color: isUp ? "#00C49F" : "#ff4d4f",
            }}
          >
            {isUp ? "+" : ""}
            {change.toFixed(2)} ({percent.toFixed(2)}%)
          </div>
        </div>

        <div
          style={{
            padding: 25,
            borderRadius: 18,
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div style={{ height: 400 }}>
            <ResponsiveContainer>
              <AreaChart
                data={spyData}
                margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient
                    id="spyGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="0%"
                      stopColor={isUp ? "#00C49F" : "#ff4d4f"}
                      stopOpacity={0.5}
                    />
                    <stop
                      offset="100%"
                      stopColor="transparent"
                    />
                  </linearGradient>
                </defs>

                <CartesianGrid
                  stroke="rgba(255,255,255,0.04)"
                  vertical={false}
                />

                <XAxis
                  dataKey="index"
                  tick={{ fill: "#aaa", fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                />

                <YAxis
                  tick={{ fill: "#aaa", fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                  domain={["auto", "auto"]}
                />

                <Tooltip
                  contentStyle={{
                    backgroundColor: "#111",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: 10,
                  }}
                  formatter={(v) => `$${v.toFixed(2)}`}
                />

                <Area
                  type="monotone"
                  dataKey="price"
                  stroke={isUp ? "#00C49F" : "#ff4d4f"}
                  strokeWidth={3}
                  fill="url(#spyGradient)"
                  dot={false}
                  activeDot={{ r: 5 }}
                  isAnimationActive={true}
                  animationDuration={900}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </>
    );
  })()}
</div>