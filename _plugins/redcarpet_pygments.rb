module Jekyll
  module Converters
    class Markdown
      class RedcarpetParser
        module WithPygments
          def block_code(code, lang)
            require 'pygments'
            lang_parts = lang && lang.split('{')
            lang = lang_parts && !lang_parts[0].empty? && lang_parts[0] || 'text'
            hl_lines = ''
            if lang_parts && lang_parts.size >= 2
              hl_lines = lang_parts[1].gsub(/[{}]/, '').split(',').map do |ln|
                if matches = /(\d+)-(\d+)/.match(ln)
                  ln = Range.new(matches[1], matches[2]).to_a.join(' ')
                end
                ln
              end.join(' ')
            end
            output = add_code_tags(
              Pygments.highlight(code, lexer: lang, options: { encoding: 'utf-8',
                                                               hl_lines: hl_lines,
                                                               lineanchors: "line" }),
              lang
            )
          end
        end
      end
    end
  end
end