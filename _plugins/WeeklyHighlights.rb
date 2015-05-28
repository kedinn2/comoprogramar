module Jekyll
    class WeeklyHighlights < Generator

        safe true
        priority :high

        def week_id(time)
            # to handle turn of year properly
            return time.strftime('%Y-%W')
        end

        def generate(site)
            # hash (dict) to store highlights grouped by week number
            highlights_by_week = {}

            today = Time.now
            # initialize recent weeks with empty highlights
            (0 .. 4).each do |i|
                w = week_id(today - i)
                highlights_by_week[w] = []
            end

            # group highlights according to week number
            site.posts.each do |post|
                if post['highlight'] != 'week'
                    next
                end
                week = week_id(post.date)
                highlights_by_week[week] ||= []
                highlights_by_week[week] << post
            end

            # make array of arrays of highlights, in the required order
            weekly_highlights = []
            highlights_by_week.keys.sort.reverse.each do |w|
                highlights_by_week[w].sort! {|a,b| b.date <=> a.date} # = hl.sort{|a,b| b.date <=> a.date }
                weekly_highlights << {'id' => w, 'hls' => highlights_by_week[w]}
            end

            # store prepared highlights
            site.config['weekly_highlights'] = weekly_highlights
        end
    end
end